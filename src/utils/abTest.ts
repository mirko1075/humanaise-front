const STORAGE_KEY = 'cta_variant';

export const getVariant = (): 'A' | 'B' => {
  if (typeof window === 'undefined') return 'A';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'A' || stored === 'B') return stored;
  const assigned = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem(STORAGE_KEY, assigned);
  return assigned;
};
