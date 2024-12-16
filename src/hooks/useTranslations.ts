import { useLanguage } from './useLanguage';
import { companyTranslations } from '../constants/i18n/translations/company';
import { roiTranslations } from '../constants/i18n/translations/roi';
import { serviceTranslations } from '../constants/i18n/translations/services';
import { industryTranslations } from '../constants/i18n/translations/industries';
import { testimonialTranslations } from '../constants/i18n/translations/testimonials';
import { valueTranslations } from '../constants/i18n/translations/values';
import { contactTranslations } from '../constants/i18n/translations/contact';

export function useTranslations() {
  const { language } = useLanguage();

  return {
    company: companyTranslations[language],
    roi: roiTranslations[language],
    services: serviceTranslations[language],
    industries: industryTranslations[language],
    testimonials: testimonialTranslations[language],
    values: valueTranslations[language],
    contact: contactTranslations[language]
  };
}