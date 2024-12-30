export const CONTACT_INFO = {
  email: "info@humanaise.com",
  phone: "+39 3928665301",
  address: {
    street: "Via Calagonone 29",
    city: "Monserrato",
    state: "CA",
    zip: "09042",
    country: "Italy",
  },
  social: {
    linkedin: "humanaise-ai",
    twitter: "@HumanaiseAI",
  },
} as const;

export const CONTACT_FORM_FIELDS = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
  },
  {
    id: "company",
    label: "Company",
    type: "text",
    placeholder: "Your company name",
    required: true,
  },
  {
    id: "industry",
    label: "Industry",
    type: "select",
    required: true,
    options: [
      "Construction",
      "Tourism & Hospitality",
      "Small and Medium Enterprises",
      "Healthcare",
      "Retail & E-commerce",
      "Other",
    ],
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "How can we help you?",
    required: true,
  },
] as const;
