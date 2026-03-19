import { Outlet } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { CookieBanner } from './CookieBanner';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen bg-primary-950">
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
