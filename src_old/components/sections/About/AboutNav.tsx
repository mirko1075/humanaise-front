import React, { useState, useEffect } from 'react';
import { ABOUT_NAV_ITEMS } from '../../../constants/navigation';

export function AboutNav() {
  const [activeSection, setActiveSection] = useState(ABOUT_NAV_ITEMS[0].href);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ABOUT_NAV_ITEMS.map(item => 
        document.querySelector(item.href) as HTMLElement
      );

      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current?.id) {
        setActiveSection(`#${current.id}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-20 z-10 bg-primary-900/90 backdrop-blur-sm border-b border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {ABOUT_NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-4 border-b-2 whitespace-nowrap ${
                activeSection === item.href
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-primary-300 hover:text-primary-200 hover:border-primary-700'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}