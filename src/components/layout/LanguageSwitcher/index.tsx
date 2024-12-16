import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { LANGUAGES } from '../../../constants/languages';
import { LanguageDropdown } from './LanguageDropdown';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-indigo-800/50 transition-colors text-indigo-200 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current language: ${LANGUAGES[language].name}`}
      >
        <span className="text-xl">{LANGUAGES[language].flag}</span>
      </button>

      {isOpen && (
        <LanguageDropdown
          currentLanguage={language}
          onLanguageSelect={handleLanguageSelect}
        />
      )}
    </div>
  );
}