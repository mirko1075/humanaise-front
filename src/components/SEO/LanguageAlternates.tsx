import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language } from '../../types/language';

interface LanguageAlternatesProps {
  baseUrl: string;
  currentPath: string;
  languages: Language[];
}

export function LanguageAlternates({ baseUrl, currentPath, languages }: LanguageAlternatesProps) {
  return (
    <Helmet>
      {languages.map(lang => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={`${baseUrl}/${lang}${currentPath}`}
        />
      ))}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={`${baseUrl}/en${currentPath}`}
      />
    </Helmet>
  );
}