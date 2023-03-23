import { ApplicationForm } from "../../workable-application-form-react/output/modern.main";

type WorkableField = {
  id: string;
  required?: boolean;
  label?: string;
  type?:
    | "email"
    | "phone"
    | "text"
    | "file"
    | "group"
    | "date"
    | "paragraph"
    | "boolean"
    | "dropdown"
    | "multiple"
    | "number";
  options?: { name?: string; value?: string }[];
  singleOption?: boolean;
  supportedFileTypes?: string[];
  supportedMimeTypes?: string[];
  maxFileSize?: number;
  maxLength?: number;
  helper?: string;
  fields?: WorkableField[];
  defaultValue?: any;
};

const onSave = (data: any, cb: (error?: string) => void) => {
  console.log(data);
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      candidate: {
        ...data,
        image_url: "https://faces-img.xcdn.link/image-lorem-face-4053.jpg",
        resume_url: "https://faces-img.xcdn.link/image-lorem-face-4053.jpg",
      },
    }),
  };

  // implement a backend API for this, as Workable does not allow CORS
  fetch("/api/workable-candidate", options)
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        cb(response.error);
        return;
      }
      cb();
    })
    .catch((err) => {
      let errorMessage = err.message;
      cb(errorMessage);
    });
};

export default function Home({ form }: { form: WorkableField[] }) {
  return (
    <>
      <ApplicationForm
        onSave={onSave as any}
        form={form}
        config={{
          telephoneInitialCountry: "IT",
          telephonePreferredCountries: ["gb", "it", "es"],
        }}
        onAvatarUpload={async (file: File) => {
          console.log(file);
          await new Promise((r) => setTimeout(r, 2000));
          return `https://faces-img.xcdn.link/image-lorem-face-4053.jpg`;
        }}
        onFileUpload={async (file: File) => {
          console.log(file);
          await new Promise((r) => setTimeout(r, 2000));
          return `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`;
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  const formResponse = await fetch(
    `https://apply.workable.com/api/v1/jobs/${process.env.NEXT_PUBLIC_WORKABLE_JOB_SHORTCODE}/form`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.WORKABLE_API_KEY}`,
      },
    },
  );
  const formJSON: WorkableField[] = await formResponse.json();

  return {
    props: { form: formJSON },
  };
}
