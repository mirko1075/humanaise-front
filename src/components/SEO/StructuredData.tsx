import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
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

export function StructuredData({ organization }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          ...organization
        })}
      </script>
    </Helmet>
  );
}