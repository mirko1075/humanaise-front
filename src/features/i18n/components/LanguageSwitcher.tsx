import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { LANGUAGES } from '../constants';
import type { Language } from '../types';

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
        <Globe className="w-5 h-5" />
        <span className="text-xl">{LANGUAGES[language].flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-indigo-800/90 backdrop-blur-sm rounded-lg shadow-lg ring-1 ring-black/5 z-50">
          {Object.entries(LANGUAGES).map(([code, { flag, name }]) => (
            <button
              key={code}
              onClick={() => handleLanguageSelect(code as Language)}
              className={`flex items-center px-4 py-2 space-x-3 w-full ${
                language === code
                  ? 'bg-indigo-700 text-white'
                  : 'text-indigo-100 hover:bg-indigo-700/50'
              } transition-colors`}
              aria-label={`Switch language to ${name}`}
            >
              <span className="text-xl">{flag}</span>
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}