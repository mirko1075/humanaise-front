import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../hooks/useLanguage';

const BASE_URL = 'https://humanaise.com';
const OG_IMAGE = `${BASE_URL}/copertina.jpg`;

const LOCALE_MAP: Record<string, string> = {
  en: 'en_US',
  it: 'it_IT',
  es: 'es_ES',
  fr: 'fr_FR',
};

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  author?: string;
}

export function SEO({
  title,
  description,
  canonical,
  keywords = 'Making AI feel Human. AI automation, business automation, artificial intelligence, workflow optimization, AI solutions',
  author = 'HumanAIse'
}: SEOProps) {
  const t = useTranslation();
  const { language } = useLanguage();

  const defaultTitle = 'HumanAIse - AI Automation Solutions';
  const defaultDescription = t.home.hero.subtitle;

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoCanonical = canonical || BASE_URL;
  const ogLocale = LOCALE_MAP[language] || 'en_US';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HumanaiseAI" />
      <meta name="twitter:creator" content="@HumanaiseAI" />
      <meta name="twitter:url" content={seoCanonical} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical */}
      <link rel="canonical" href={seoCanonical} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "HumanAIse",
          "url": BASE_URL,
          "logo": OG_IMAGE,
          "description": seoDescription,
          "sameAs": [
            "https://twitter.com/HumanaiseAI",
            "https://linkedin.com/company/humanaise-ai"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+39-392-866-5301",
            "contactType": "customer service",
            "email": "info@humanaise.com",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Italian", "Spanish", "French"]
          }
        })}
      </script>
    </Helmet>
  );
}