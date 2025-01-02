import React from 'react';
import type { Language } from '../../../types/language';
import { LANGUAGES } from '../../../constants/languages';
import { LanguageButton } from './LanguageButton';

interface LanguageDropdownProps {
  currentLanguage: Language;
  onLanguageSelect: (lang: Language) => void;
}

export function LanguageDropdown({ currentLanguage, onLanguageSelect }: LanguageDropdownProps) {
  return (
    <div className="absolute right-0 mt-2 py-2 w-40 bg-indigo-800/90 backdrop-blur-sm rounded-lg shadow-lg ring-1 ring-black/5 z-50">
      <div className="flex flex-col">
        {(Object.keys(LANGUAGES) as Language[]).map((code) => (
          <LanguageButton
            key={code}
            language={code}
            isSelected={currentLanguage === code}
            onClick={() => onLanguageSelect(code)}
          />
        ))}
      </div>
    </div>
  );
}