export interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface TwitterCardsProps {
  title: string;
  description: string;
  image: string;
}

export interface StructuredDataProps {
  organization: {
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
    contactPoint: {
      telephone: string;
      email: string;
      contactType: string;
      areaServed: string;
      availableLanguage: string[];
    };
  };
}

export interface LanguageAlternatesProps {
  baseUrl: string;
  currentPath: string;
  languages: Language[];
}