# HumanAIse Frontend

## Build & Run
- `npm run dev` — start Vite dev server
- `npm run build` — generate sitemap + production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS with custom `primary` (blue) and `secondary` (green) color scales
- No router library — routing is manual via `window.location.pathname` in `src/App.tsx`
- Icons: `lucide-react`
- SEO: `react-helmet-async`
- Charts: `chart.js` + `react-chartjs-2` (ROI calculator)

## Architecture
- `src/components/sections/` — landing page sections (Hero, About, Services, etc.)
- `src/components/layout/` — Header, Footer
- `src/components/ui/` — reusable UI primitives
- `src/components/SEO.tsx` — SEO meta tags component
- `src/pages/` — full-page routes (PrivacyPolicy, TermsOfService)
- `src/constants/` — static data, navigation, services, industries
- `src/constants/i18n/` — translation files per language (en, it, es, fr)
- `src/contexts/LanguageContext.tsx` — language state with localStorage persistence
- `src/hooks/useTranslation.ts` — returns translation object for current language
- `src/utils/seo/` — sitemap generator (Node script, runs at build time)

## i18n
- 4 languages: `en`, `it`, `es`, `fr` (type: `Language`)
- Translations live in `src/constants/i18n/{lang}.ts`
- Use `useTranslation()` hook to access translated strings
- Language selection persisted in localStorage, reflected in URL as `/{lang}#section`

## Patterns
- All section components use hash-based anchor navigation (`#about`, `#services`, etc.)
- Tailwind utility classes only — no CSS modules or styled-components
- Images optimized at build time via `vite-plugin-image-optimizer`

## Deployment
- Vercel (vercel.json with SPA rewrite) and Netlify (`public/_redirects`)
- SPA: all routes rewrite to `/index.html`

## Workflow
- Branch from `master`, PR back to `master`
- Commit messages: imperative mood, prefixed (`feat:`, `fix:`, `chore:`, `docs:`)
- Keep PRs focused — one concern per PR
