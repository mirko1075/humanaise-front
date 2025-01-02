import React, { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageRouterProps {
  children: React.ReactNode;
}

export function LanguageRouter({ children }: LanguageRouterProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update URL with language parameter
    const currentHash = window.location.hash || '#home';
    const newUrl = `/${language}${currentHash}`;
    window.history.replaceState(null, '', newUrl);
    
    // Update document language
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}