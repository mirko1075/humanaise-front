import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const CONSENT_KEY = 'humanaise_cookie_consent';

type ConsentValue = 'accepted' | 'rejected';

const labels = {
  en: {
    message: 'We use cookies to improve your experience. You can accept or reject non-essential cookies.',
    accept: 'Accept',
    reject: 'Reject',
    preferences: 'Cookie Policy',
  },
  it: {
    message: 'Utilizziamo cookie per migliorare la tua esperienza. Puoi accettare o rifiutare i cookie non essenziali.',
    accept: 'Accetta',
    reject: 'Rifiuta',
    preferences: 'Politica Cookie',
  },
  es: {
    message: 'Utilizamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar las cookies no esenciales.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    preferences: 'Política de Cookies',
  },
  fr: {
    message: 'Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies non essentiels.',
    accept: 'Accepter',
    reject: 'Refuser',
    preferences: 'Politique de Cookies',
  },
} as const;

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const t = labels[language];

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  const handlePreferences = () => {
    window.history.pushState({}, '', '/cookies');
    window.scrollTo(0, 0);
    window.location.reload();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-primary-900/95 backdrop-blur-sm border border-primary-700/50 shadow-2xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <Cookie className="h-6 w-6 text-secondary-400 shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-primary-200 leading-relaxed">
              {t.message}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleConsent('accepted')}
                className="px-5 py-2 text-sm font-medium rounded-lg bg-secondary-500 text-white hover:bg-secondary-600 transition-colors"
              >
                {t.accept}
              </button>
              <button
                onClick={() => handleConsent('rejected')}
                className="px-5 py-2 text-sm font-medium rounded-lg bg-primary-700 text-primary-200 hover:bg-primary-600 transition-colors"
              >
                {t.reject}
              </button>
              <button
                onClick={handlePreferences}
                className="px-3 py-2 text-sm text-primary-300 hover:text-white underline underline-offset-2 transition-colors"
              >
                {t.preferences}
              </button>
            </div>
          </div>
          <button
            onClick={() => handleConsent('rejected')}
            className="text-primary-400 hover:text-white transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
