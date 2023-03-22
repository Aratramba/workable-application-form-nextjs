import fetch from "node-fetch";

import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

type Data = {
  error?: string;
};

type WorkableQuestionType = {
  id: string;
  body: string | React.ReactNode;
  type:
    | "short_text"
    | "free_text"
    | "multiple_choice"
    | "boolean"
    | "dropdown"
    | "numeric"
    | "date"
    | "file";
  required?: boolean;
  single_answer?: boolean;
  choices?: {
    id: string;
    body: string;
  }[];
  supported_file_types?: string[];
  max_file_size?: number;
};

const cors = Cors({
  methods: ["POST"],
  origin: true,
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (!req.body || !req.body.candidate) {
    return res.status(400).json({ error: "No candidate data" });
  }

  await runMiddleware(req, res, cors);

  /**
   * The public Workable /form/ API returns field ID's that don't match the
   * field ID's in the /spi/v3/jobs/{shortcode}/questions API. This means
   * that we need to fetch the questions and then map the field ID's by label
   */
  const questionsResponse = await fetch(
    `https://${process.env.WORKABLE_SUBDOMAIN}.workable.com/spi/v3/jobs/${process.env.WORKABLE_JOB_SHORTCODE}/questions`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.WORKABLE_API_KEY}`,
      },
    },
  );
  const questionsJSON: any = await questionsResponse.json();

  if (questionsJSON.error) {
    return res.status(429).json({
      error:
        "Exceeded Workable API rate limits. Try again in a few second seconds.",
    });
  }
  const questions: WorkableQuestionType[] = questionsJSON.questions;
  console.log(questionsJSON);

  const candidate = req.body.candidate;

  /**
   * Map answers and get the question ID from the label
   */
  candidate.answers = (candidate.answers || []).map((answer: any) => {
    const originalQuestion = questions.find(
      (question: WorkableQuestionType) => question.body === answer.label,
    );
    if (originalQuestion) {
      answer.question_key = originalQuestion.id;

      /**
       * If the question is a multiple choice question, we need to map the
       * answer label to the choice ID, because workable uses two different ID systems 
       * apparently. One for /form and another for POST /candidates
       * 
       * This is how it's pushed in from the /form endpoint
       * 
       * "choices": ["one", "two"]
       * 
       * This is how it looks from the questions endpoint
       * 
       * "choices": [
       *   { "body": "one", "id": "2c9487" },
       *   { "body": "two", "id": "2c9488" },
       *   { "body": "three", "id": "2c9489" }
       * ],
    },
       */
      if (originalQuestion.choices) {
        if (
          originalQuestion.type === "multiple_choice" ||
          originalQuestion.type === "dropdown"
        ) {
          // replace the answer value with the choice IDs

          answer.choices = answer.choices.map((choice: any) => {
            return originalQuestion?.choices?.find(
              (originalChoice: any) => originalChoice.body === choice,
            )?.id;
          });
          console.log(answer.choices);
        }
      }
    }
    return answer;
  });

  console.log(candidate);

  const candidateResponse = await fetch(
    `https://${process.env.WORKABLE_SUBDOMAIN}.workable.com/spi/v3/jobs/${process.env.WORKABLE_JOB_SHORTCODE}/candidates`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.WORKABLE_API_KEY}`,
      },
      body: JSON.stringify(req.body.candidate),
    },
  );
  const workableJSON: any = await candidateResponse.json();
  console.log(workableJSON);
  return res.status(200).json(workableJSON);
}
