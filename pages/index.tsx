import { ApplicationForm } from "../../workable-application-form-react/output/modern.main";

const form = [
  {
    name: "Personal information",
    fields: [
      {
        id: "firstname",
        required: false,
        label: "First name",
        type: "text",
        maxLength: 127,
      },
      {
        id: "lastname",
        required: false,
        label: "Last name",
        type: "text",
        maxLength: 127,
      },
      {
        id: "email",
        required: false,
        label: "Email",
        type: "email",
        maxLength: 255,
      },
      {
        id: "headline",
        required: false,
        label: "Headline",
        type: "text",
        maxLength: 255,
      },
      {
        id: "phone",
        required: false,
        label: "Phone",
        type: "phone",
        helper:
          "The hiring team may use this number to contact you about this job.",
        maxLength: 255,
      },
      {
        id: "address",
        required: false,
        label: "Address",
        type: "text",
      },
      {
        id: "avatar",
        required: false,
        label: "Photo",
        type: "file",
        supportedFileTypes: [".jpg", ".jpeg", ".gif", ".png"],
        supportedMimeTypes: ["image/jpeg", "image/gif", "image/png"],
        maxFileSize: 12000000,
      },
    ],
  },
  {
    name: "Profile",
    fields: [
      {
        id: "education",
        required: false,
        label: "Education",
        type: "group",
        fields: [
          {
            id: "school",
            required: false,
            label: "School",
            type: "text",
            maxLength: 255,
          },
          {
            id: "field_of_study",
            required: false,
            label: "Field of study",
            type: "text",
            maxLength: 255,
          },
          {
            id: "degree",
            required: false,
            label: "Degree",
            type: "text",
            maxLength: 255,
          },
          {
            id: "start_date",
            required: false,
            label: "Start date",
            type: "date",
          },
          {
            id: "end_date",
            required: false,
            label: "End date",
            type: "date",
          },
        ],
      },
      {
        id: "experience",
        required: false,
        label: "Experience",
        type: "group",
        fields: [
          {
            id: "title",
            required: false,
            label: "Title",
            type: "text",
            maxLength: 255,
          },
          {
            id: "company",
            required: false,
            label: "Company",
            type: "text",
            maxLength: 255,
          },
          {
            id: "industry",
            required: false,
            label: "Industry",
            type: "text",
            maxLength: 255,
          },
          {
            id: "summary",
            required: false,
            label: "Summary",
            type: "paragraph",
          },
          {
            id: "start_date",
            required: false,
            label: "Start date",
            type: "date",
          },
          {
            id: "end_date",
            required: false,
            label: "End date",
            type: "date",
          },
          {
            id: "current",
            required: false,
            label: "I currently work here",
            type: "boolean",
          },
        ],
      },
      {
        id: "summary",
        required: false,
        label: "Summary",
        type: "paragraph",
      },
      {
        id: "resume",
        required: false,
        label: "Resume",
        type: "file",
        supportedFileTypes: [".pdf", ".doc", ".docx", ".odt", ".rtf"],
        supportedMimeTypes: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.oasis.opendocument.text",
          "application/rtf",
        ],
        maxFileSize: 12000000,
      },
    ],
  },
  {
    name: "Details",
    fields: [
      {
        id: "cover_letter",
        required: false,
        label: "Cover letter",
        type: "paragraph",
      },
      {
        id: "QA_6143234",
        required: false,
        label: "Paragraph: Can you answer this question?",
        type: "paragraph",
      },
      {
        id: "QA_6143235",
        required: false,
        label: "Short answer: Can you answer this question?",
        type: "text",
        maxLength: 127,
      },
      {
        id: "QA_6143236",
        required: false,
        label: "Yes no: Can you answer this question?",
        type: "boolean",
      },
      {
        id: "QA_6143237",
        required: false,
        label: "Dropdown: Can you answer this question?",
        type: "dropdown",
        options: [
          {
            name: "2920373",
            value: "one",
          },
          {
            name: "2920374",
            value: "two",
          },
          {
            name: "2920375",
            value: "three",
          },
        ],
        singleOption: true,
      },
      {
        id: "QA_6143238",
        required: false,
        label: "Multiple choice: Can you answer this question?",
        type: "multiple",
        options: [
          {
            name: "2920376",
            value: "one",
          },
          {
            name: "2920377",
            value: "two",
          },
          {
            name: "2920378",
            value: "three",
          },
        ],
        singleOption: false,
      },
      {
        id: "QA_6143239",
        required: false,
        label: "Multiple choice (max 1): Can you answer this question?",
        type: "multiple",
        options: [
          {
            name: "2920379",
            value: "one",
          },
          {
            name: "2920380",
            value: "two",
          },
          {
            name: "2920381",
            value: "three",
          },
        ],
        singleOption: true,
      },
      {
        id: "QA_6143240",
        required: false,
        label: "Date: Can you answer this question?",
        type: "date",
      },
      {
        id: "QA_6143241",
        required: false,
        label: "Number: Can you answer this question?",
        type: "number",
      },
      {
        id: "QA_6143242",
        required: false,
        label: "Upload: Can you answer this question?",
        type: "file",
        supportedFileTypes: [
          ".pdf",
          ".doc",
          ".docx",
          ".odt",
          ".rtf",
          ".ppt",
          ".pptx",
          ".png",
          ".jpg",
          ".jpeg",
          ".gif",
          ".tiff",
          ".xlsx",
          ".xls",
          ".zip",
        ],
        supportedMimeTypes: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.oasis.opendocument.text",
          "application/rtf",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/tiff",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-excel",
          "application/zip",
        ],
        maxFileSize: 20000000,
      },
    ],
  },
];

const onSave = (data: any, cb: (error?: string) => void) => {
  console.log(data);
  console.log(JSON.stringify(data));
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

export default function Home() {
  return (
    <>
      <ApplicationForm
        onSave={onSave as any}
        form={form}
        config={{
          telephoneInitialCountry: "IT",
          telephonePreferredCountries: ["gb", "it", "es"],
        }}
      />
    </>
  );
}
