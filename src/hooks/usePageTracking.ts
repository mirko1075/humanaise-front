import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '../utils/tracking';
import { getVariant } from '../utils/abTest';

interface CtaVariants {
  A: string;
  B: string;
}

export const usePageTracking = (page: string, ctaVariants: CtaVariants) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollTracked = useRef(false);
  const [variant] = useState<'A' | 'B'>(() => getVariant());

  const ctaText = ctaVariants[variant];

  const handleCtaClick = () => {
    trackEvent('cta_click', { page, cta_text: ctaText, variant });
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scrollTracked.current) {
            scrollTracked.current = true;
            trackEvent('scroll_contact', { page, variant });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [page, variant]);

  return { variant, ctaText, handleCtaClick, contactRef };
};
