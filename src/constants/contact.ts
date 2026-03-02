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
    type: "text",
    required: true,
  },
  {
    id: "email",
    type: "email",
    required: true,
  },
  {
    id: "company",
    type: "text",
    required: true,
  },
  {
    id: "industry",
    type: "select",
    required: true,
    optionsKey: "industryOptions" as const,
  },
  {
    id: "message",
    type: "textarea",
    required: true,
  },
  {
    id: "budget",
    type: "select",
    required: true,
    optionsKey: "budgetOptions" as const,
  },
  {
    id: "timeline",
    type: "select",
    required: true,
    optionsKey: "timelineOptions" as const,
  },
] as const;
