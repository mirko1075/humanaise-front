export interface NewsClient {
  name: string;
  website: string | null;
}

export interface NewsMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  client: NewsClient;
  metrics: NewsMetric[];
  content: string;
  tags: string[];
}
