import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { CookieBanner } from './CookieBanner';
import { ScrollToTop } from './ScrollToTop';
import { useLanguage } from '../hooks/useLanguage';
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

export function Layout() {
  return (
    <div className="min-h-screen bg-primary-950">
      <LangSync />
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
