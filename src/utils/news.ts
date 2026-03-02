import newsData from '../data/news.json';
import type { NewsItem } from '../types/news';

const RECENT_NEWS_WINDOW_DAYS = 14;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const BASE_URL = 'https://humanaise.com';
const OG_IMAGE = `${BASE_URL}/copertina.jpg`;

export const newsItems: NewsItem[] = [...newsData].sort((left, right) =>
  right.date.localeCompare(left.date),
);

export function hasRecentNews(referenceDate = new Date()) {
  const referenceTime = referenceDate.getTime();

  return newsItems.some((item) => {
    const publishedTime = new Date(`${item.date}T00:00:00Z`).getTime();
    const diffInDays = (referenceTime - publishedTime) / MS_PER_DAY;

    return diffInDays >= 0 && diffInDays < RECENT_NEWS_WINDOW_DAYS;
  });
}

function toIsoDate(date: string) {
  return `${date}T00:00:00Z`;
}

function toPlainText(content: string) {
  return content
    .replace(/\n•\s*/g, ' ')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getHomepageNewsStructuredData(language: string) {
  const pageUrl = `${BASE_URL}/${language}`;

  const publisher = {
    '@type': 'Organization',
    name: 'HumanAIse',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
    },
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#news`,
    name: 'HumanAIse Latest News',
    url: pageUrl,
    description:
      'Latest HumanAIse milestones in operational AI, automation systems, and production deployments.',
    inLanguage: language,
    isPartOf: {
      '@type': 'WebSite',
      name: 'HumanAIse',
      url: BASE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: newsItems.length,
      itemListElement: newsItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: item.title,
          datePublished: toIsoDate(item.date),
          dateModified: toIsoDate(item.date),
          author: publisher,
          publisher,
          inLanguage: language,
          about: item.tags.map((tag) => ({
            '@type': 'Thing',
            name: tag,
          })),
          keywords: item.tags.join(', '),
          articleSection: item.tags[0],
          articleBody: toPlainText(item.content),
          isAccessibleForFree: true,
          mentions: {
            '@type': 'Organization',
            name: item.client.name,
            ...(item.client.website ? { url: item.client.website } : {}),
          },
        },
      })),
    },
  };
}
