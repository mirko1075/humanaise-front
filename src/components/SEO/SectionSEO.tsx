import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

interface SectionSEOProps {
  section: string;
}

export function SectionSEO({ section }: SectionSEOProps) {
  const { language } = useLanguage();
  const t = useTranslation();

  const getMetaDescription = () => {
    switch (section) {
      case 'home':
        return t.home.hero.subtitle;
      case 'about':
        return t.about.company.mission;
      case 'services':
        return t.services.subtitle;
      default:
        return t.home.hero.subtitle;
    }
  };

  const baseUrl = 'https://humanaise.com';
  const currentUrl = `${baseUrl}/${language}#${section}`;

  return (
    <Helmet>
      <title>{`HumanAIse - ${section.charAt(0).toUpperCase() + section.slice(1)} | ${language.toUpperCase()}`}</title>
      <meta name="description" content={getMetaDescription()} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en#${section}`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it#${section}`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/es#${section}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr#${section}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en#${section}`} />
    </Helmet>
  );
}