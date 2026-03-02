import { useState } from 'react';
import { BellDot, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import { hasRecentNews } from '../../utils/news';
import logo from '../../imgs/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();
  const { language } = useLanguage();
  const hasFreshNews = hasRecentNews();
  const homePath = `/${language}`;

  const navItems = [
    { href: `${homePath}#home`, label: t.common.nav.home },
    { href: `${homePath}#about`, label: t.common.nav.about },
    { href: `${homePath}#news`, label: t.common.nav.news, hasFreshNews },
    { href: `${homePath}#services`, label: t.common.nav.services },
    { href: `${homePath}#roi-calculator`, label: t.common.nav.roiCalculator },
    { href: `${homePath}#contact`, label: t.common.nav.contact }
  ];

  const isHomePage = window.location.pathname === '/' || window.location.pathname === homePath;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.slice(href.indexOf('#'));
    const targetId = hash.replace('#', '');

    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `${homePath}${hash}`);
      }
    }
    // If not on homepage, let the browser navigate to /#section
  };

  return (
    <header className="fixed w-full bg-indigo-950/80 backdrop-blur-xl z-50 border-b border-white/[0.06]">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
          <a href="/"><img src={logo} width="192px" alt="HumanAIse" /></a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="inline-flex items-center gap-2 text-indigo-200/80 hover:text-white transition-colors duration-200 text-sm"
              >
                <span>{item.label}</span>
                {item.hasFreshNews ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/35 bg-emerald-400/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    <BellDot className="h-3 w-3" aria-hidden="true" />
                    {t.news.freshBadge}
                  </span>
                ) : null}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              className="text-white p-2 hover:bg-white/[0.08] rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-indigo-950/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <Container>
              <nav className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    onClick={(e) => { handleNavClick(e, item.href); setIsMenuOpen(false); }}
                  >
                    <span>{item.label}</span>
                    {item.hasFreshNews ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/35 bg-emerald-400/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                        <BellDot className="h-3 w-3" aria-hidden="true" />
                        {t.news.freshBadge}
                      </span>
                    ) : null}
                  </motion.a>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
