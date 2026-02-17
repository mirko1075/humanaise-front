export const CONTACT_INFO = {
  email: "info@humanaise.com",
  phone: "+39 353 4932019",
  whatsapp: "+39 353 4932019",
  whatsappUrl: "https://wa.me/393534932019",
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
    instagram: "https://www.instagram.com/humanaiseai",
    facebook: "https://www.facebook.com/profile.php?id=61584810028432",
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
    required: false,
  },
  {
    id: "industry",
    label: "Industry",
    type: "select",
    required: false,
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
    required: false,
  },
] as const;
