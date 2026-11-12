import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { CookieBanner } from './CookieBanner';
import { ScrollToTop } from './ScrollToTop';
import { useLanguage } from '../hooks/useLanguage';
import { trackEvent } from '../utils/tracking';
import type { Language } from '../types/language';

const SUPPORTED_LANGS = ['en', 'it', 'es', 'fr'];

function LangSync() {
  const location = useLocation();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const [, maybeLang] = location.pathname.split('/');
    if (SUPPORTED_LANGS.includes(maybeLang)) {
      setLanguage(maybeLang as Language);
    }
  }, [location.pathname, setLanguage]);

  return null;
}

// One delegated listener reports every click on a contact link (Contact section, footer, ...).
function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as Element | null)?.closest('a')?.getAttribute('href') ?? '';
      const channel = href.startsWith('tel:') ? 'phone'
        : href.startsWith('mailto:') ? 'email'
        : href.includes('wa.me/') ? 'whatsapp'
        : null;
      if (channel) trackEvent('contact_click', { channel, page: window.location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen bg-primary-950">
      <LangSync />
      <ContactClickTracker />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
