import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { en } from '../constants/i18n/en';
import { it } from '../constants/i18n/it';
import { es } from '../constants/i18n/es';
import { fr } from '../constants/i18n/fr';
import type { Language } from '../constants/i18n/types';

const translations = {
  en,
  it,
  es,
  fr
};

export function useTranslation() {
  const { language } = useContext(LanguageContext);
  return translations[language];
}