import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEO({ 
  title, 
  description,
  canonical = 'https://humanaise.com',
  ogImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
}: SEOProps) {
  const t = useTranslation();
  
  const defaultTitle = 'HumanAIse - AI Automation Solutions';
  const defaultDescription = t.home.hero.subtitle;

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HumanAIse",
            "url": "${canonical}",
            "logo": "${ogImage}",
            "description": "${seoDescription}",
            "sameAs": [
              "https://twitter.com/HumanaiseAI",
              "https://linkedin.com/company/humanaise"
            ]
          }
        `}
      </script>
    </Helmet>
  );
}