declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, string> = {}
): void => {
  if (typeof window === 'undefined') return;
  // GA4 via gtag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
  // GTM dataLayer fallback
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }
};

// Fire Google Ads conversion — replace CONVERSION_ID/LABEL in GTM or here
export const trackConversion = (conversionLabel: string): void => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `AW-REPLACE_WITH_YOUR_ID/${conversionLabel}`,
    });
  }
};
