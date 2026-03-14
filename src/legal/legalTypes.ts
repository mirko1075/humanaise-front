export interface LegalSection {
  title: string;
  content: string;
  items?: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalContent {
  privacyPolicy: LegalDocument;
  cookiePolicy: LegalDocument;
  termsAndConditions: LegalDocument;
}
