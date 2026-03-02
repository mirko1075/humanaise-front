import { en } from '../constants/i18n/en';
import { es } from '../constants/i18n/es';
import { fr } from '../constants/i18n/fr';
import { it } from '../constants/i18n/it';
import newsData from '../data/news';
import type { Translation } from '../constants/i18n/types';
import type { Language } from '../types/language';
import type { NewsItem, NewsItemData, NewsTranslation } from '../types/news';

const RECENT_NEWS_WINDOW_DAYS = 14;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const BASE_URL = 'https://humanaise.com';
const OG_IMAGE = `${BASE_URL}/copertina.jpg`;
const FALLBACK_LANGUAGES: Record<Language, Language[]> = {
  en: ['en', 'it', 'es', 'fr'],
  it: ['it', 'en', 'es', 'fr'],
  es: ['es', 'en', 'it', 'fr'],
  fr: ['fr', 'en', 'it', 'es'],
};

const newsSectionTranslations: Record<Language, Translation['news']> = {
  en: en.news,
  it: it.news,
  es: es.news,
  fr: fr.news,
};

const sortedNewsItemsData: NewsItemData[] = [...newsData].sort((left, right) =>
  right.date.localeCompare(left.date),
);

function resolveNewsTranslation(
  item: NewsItemData,
  language: Language,
): { contentLanguage: Language; translation: NewsTranslation } {
  for (const candidateLanguage of FALLBACK_LANGUAGES[language]) {
    const translation = item.translations[candidateLanguage];
    if (translation) {
      return {
        contentLanguage: candidateLanguage,
        translation,
      };
    }
  }

  throw new Error(`News item "${item.id}" is missing translations.`);
}

export function getNewsItems(language: Language): NewsItem[] {
  return sortedNewsItemsData.map((item) => {
    const { contentLanguage, translation } = resolveNewsTranslation(item, language);

    return {
      id: item.id,
      date: item.date,
      client: item.client,
      title: translation.title,
      metrics: translation.metrics,
      content: translation.content,
      tags: translation.tags,
      contentLanguage,
    };
  });
}

export function hasRecentNews(referenceDate = new Date()) {
  const referenceTime = referenceDate.getTime();

  return sortedNewsItemsData.some((item) => {
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

export function getHomepageNewsStructuredData(language: Language) {
  const pageUrl = `${BASE_URL}/${language}`;
  const localizedNewsItems = getNewsItems(language);
  const newsCopy = newsSectionTranslations[language];

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
    name: newsCopy.seoTitle,
    url: pageUrl,
    description: newsCopy.seoDescription,
    inLanguage: language,
    isPartOf: {
      '@type': 'WebSite',
      name: 'HumanAIse',
      url: BASE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: localizedNewsItems.length,
      itemListElement: localizedNewsItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: item.title,
          datePublished: toIsoDate(item.date),
          dateModified: toIsoDate(item.date),
          author: publisher,
          publisher,
          inLanguage: item.contentLanguage,
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
