import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Small delay to let the DOM render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hash]);
}
