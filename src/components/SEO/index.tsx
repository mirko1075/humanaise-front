import React from 'react';
import { MetaTags } from './MetaTags';
import { OpenGraph } from './OpenGraph';
import { TwitterCards } from './TwitterCards';
import { StructuredData } from './StructuredData';
import { LanguageAlternates } from './LanguageAlternates';
import { useLanguage } from '../../hooks/useLanguage';
import { LANGUAGES } from '../../constants/languages';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
}

export function SEO({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  path = ''
}: SEOProps) {
  const { language } = useLanguage();
  const baseUrl = 'https://humanaise.com';
  const url = `${baseUrl}/${language}${path}`;

  const organization = {
    name: 'HumanAIse',
    url: baseUrl,
    logo: image,
    description,
    sameAs: [
      'https://twitter.com/HumanaiseAI',
      'https://linkedin.com/company/humanaise'
    ],
    contactPoint: {
      telephone: '+39-392-866-5301',
      email: 'info@humanaise.com',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Italian', 'Spanish', 'French']
    }
  };

  return (
    <>
      <MetaTags title={title} description={description} />
      <OpenGraph title={title} description={description} url={url} image={image} />
      <TwitterCards title={title} description={description} image={image} />
      <StructuredData organization={organization} />
      <LanguageAlternates 
        baseUrl={baseUrl}
        currentPath={path}
        languages={Object.keys(LANGUAGES) as Language[]}
      />
    </>
  );
}