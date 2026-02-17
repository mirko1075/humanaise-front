import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    { href: '/#success-stories', label: t.common.nav.successStories },
    { href: '/#contact', label: t.common.nav.contact }
  ];

  return (
    <header className="fixed w-full bg-indigo-900/90 backdrop-blur-sm z-50 shadow-lg">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
          <a href="/"><img src={logo} width="192px" /></a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-indigo-200 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button 
              className="text-white p-2 hover:bg-indigo-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-indigo-800`}
      >
        <Container>
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-indigo-200 hover:text-white hover:bg-indigo-700/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}