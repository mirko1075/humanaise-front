import type { Language } from './language';

export interface NewsClient {
  name: string;
  website: string | null;
}

export interface NewsMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface NewsTranslation {
  title: string;
  metrics: NewsMetric[];
  content: string;
  tags: string[];
}

export type NewsTranslations = Partial<Record<Language, NewsTranslation>>;

export interface NewsItemData {
  id: string;
  date: string;
  client: NewsClient;
  translations: NewsTranslations;
}

export interface NewsItem extends NewsTranslation {
  id: string;
  date: string;
  client: NewsClient;
  contentLanguage: Language;
}
