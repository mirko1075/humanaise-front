import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the hash scroll hook handle it
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
