import React, { createContext, useState, useEffect } from 'react';
import type { Language } from '../types/language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {}
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'it', 'es', 'fr'].includes(savedLang)) {
      return savedLang;
    }
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update URL and document language
    const currentHash = window.location.hash || '#home';
    const newUrl = `/${lang}${currentHash}`;
    window.history.pushState(null, '', newUrl);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    
    // Set initial URL
    const currentHash = window.location.hash || '#home';
    const newUrl = `/${language}${currentHash}`;
    window.history.replaceState(null, '', newUrl);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}