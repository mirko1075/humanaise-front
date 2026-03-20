import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../imgs/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { hash: '#home', label: t.common.nav.home },
    { hash: '#services', label: t.common.nav.services },
    { hash: '#use-cases', label: t.landing.useCases.title },
    { hash: '#how-it-works', label: t.landing.howItWorks.title },
    { hash: '#news', label: t.common.nav.news, highlight: true },
    { hash: '#contact', label: t.common.nav.contact },
  ];

  const isHomePage = location.pathname === '/' || /^\/[a-z]{2}$/.test(location.pathname);

  const scrollToSection = (hash: string) => {
    const targetId = hash.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent, hash: string, closeMobile = false) => {
    e.preventDefault();

    if (closeMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (isHomePage) {
      if (closeMobile) {
        setTimeout(() => scrollToSection(hash), 300);
      } else {
        scrollToSection(hash);
      }
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <header className="fixed w-full bg-indigo-950/80 backdrop-blur-xl z-50 border-b border-white/[0.06]">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/"><img src={logo} width="192px" alt="HumanAIse" /></Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`/${item.hash}`}
                onClick={(e) => handleNavClick(e, item.hash)}
                className={`transition-colors duration-200 text-sm ${
                  item.highlight
                    ? 'text-primary-300 hover:text-white flex items-center gap-1.5'
                    : 'text-indigo-200/80 hover:text-white'
                }`}
              >
                {item.highlight && (
                  <span className="relative">
                    <Newspaper className="h-4 w-4" />
                    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  </span>
                )}
                {item.label}
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
                    key={item.hash}
                    href={`/${item.hash}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors ${
                      item.highlight ? 'text-primary-300 flex items-center gap-2' : 'text-indigo-200'
                    }`}
                    onClick={(e) => handleNavClick(e, item.hash, true)}
                  >
                    {item.highlight && (
                      <span className="relative">
                        <Newspaper className="h-4 w-4" />
                        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      </span>
                    )}
                    {item.label}
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
