const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export type UtmData = Partial<Record<typeof UTM_PARAMS[number], string>>;

export const captureUtm = (): void => {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const utm: UtmData = {};
  UTM_PARAMS.forEach((key) => {
    const val = params.get(key);
    if (val) utm[key] = val;
  });
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem('utm_data', JSON.stringify(utm));
  }
};

export const getUtm = (): UtmData => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem('utm_data') ?? '{}');
  } catch {
    return {};
  }
};
