import React from 'react';
import type { Language } from '../../../types/language';
import { LANGUAGES } from '../../../constants/languages';

interface LanguageButtonProps {
  language: Language;
  isSelected: boolean;
  onClick: () => void;
}

export function LanguageButton({ language, isSelected, onClick }: LanguageButtonProps) {
  const { flag, name } = LANGUAGES[language];
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 space-x-3 w-full ${
        isSelected
          ? 'bg-indigo-700 text-white'
          : 'text-indigo-100 hover:bg-indigo-700/50'
      } transition-colors`}
      aria-label={`Switch language to ${name}`}
    >
      <span className="text-xl">{flag}</span>
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
}