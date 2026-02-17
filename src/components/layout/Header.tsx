import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../imgs/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();

  const navItems = [
    { href: '/#home', label: t.common.nav.home },
    { href: '/#about', label: t.common.nav.about },
    { href: '/#services', label: t.common.nav.services },
    { href: '/#roi-calculator', label: t.common.nav.roiCalculator },
    { href: '/#contact', label: t.common.nav.contact }
  ];

  const isHomePage = window.location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.replace('/', '');
    const targetId = hash.replace('#', '');

    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', hash);
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
                className="text-indigo-200/80 hover:text-white transition-colors duration-200 text-sm"
              >
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
                    className="block px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    onClick={(e) => { handleNavClick(e, item.href); setIsMenuOpen(false); }}
                  >
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
