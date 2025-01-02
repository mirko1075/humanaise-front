import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  author?: string;
}

export function SEO({ 
  title, 
  description,
  canonical = 'https://humanaise.com',
  ogImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  keywords = 'AI automation, business automation, artificial intelligence, workflow optimization, AI solutions',
  author = 'HumanAIse'
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
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
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

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />

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
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+39-392-866-5301",
              "contactType": "customer service",
              "email": "info@humanaise.com",
              "areaServed": "Worldwide",
              "availableLanguage": ["English", "Italian", "Spanish", "French"]
            }
          }
        `}
      </script>
    </Helmet>
  );
}