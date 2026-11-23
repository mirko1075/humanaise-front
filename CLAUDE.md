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
- **Hosting: Vercel** (since 2026-11-23), team `humanaise`, project `humanaise-front` (`prj_cZqu1HzQYnqLkxN3QnGyipABCN7d`)
  - Production URL: https://humanaise-front.vercel.app → custom domains `humanaise.com`, `www.humanaise.com`
  - Access: `npx vercel login` (account owner of team `humanaise`), dashboard https://vercel.com/humanaise/humanaise-front
  - Deploy: manual, `npx vercel deploy --prod` from a clean checkout (no Git integration yet: `vercel git connect` to deploy on push). `.vercel/` holds the local project link, not committed
  - SPA rewrite in `vercel.json`
- **Netlify: dismissed.** The old account was suspended for unpaid billing; site `humanaise` (`fa0fcd72-b049-4fd7-8c41-0a59e868a577`) is inactive but still claims `humanaise.com`, so the domain cannot be attached to any other Netlify site (`humanaiseai` on Mirko's team was refused) until Netlify support releases it. `public/_redirects` is a leftover
- **Domain & DNS: GoDaddy** (registrar and nameservers `ns77/ns78.domaincontrol.com`). API token in `.env` as `GODADDY_TOKEN` (never commit)
  - `www` CNAME → `cname.vercel-dns.com`
  - `@` A → `76.76.21.21` (only this A record)
  - `_vercel` TXT → `vc-domain-verify=humanaise.com,9a45c76f341727f15841` and `vc-domain-verify=www.humanaise.com,64333e7cd03f292c756b` (Vercel ownership proof)
  - Leave MX / SPF / Google / Microsoft TXT records alone: they serve email
- **Contact form**: `src/components/sections/Contact.tsx` POSTs JSON to n8n webhook `https://n8n.humanaise.com/webhook/netlify-form-submission` (workflow `[HUMANAISE] - Netlify Form Submission` in repo `n8n-automation-humanaise`), which forwards to `relay.humanaise.com`. Payload keeps the old Netlify shape (`form_name`, `site_url`, `created_at`, `data`). Webhook is unauthenticated: add Turnstile if spam appears
- SPA: all routes rewrite to `/index.html`

## Workflow
- Branch from `master`, PR back to `master`
- Commit messages: imperative mood, prefixed (`feat:`, `fix:`, `chore:`, `docs:`)
- Keep PRs focused — one concern per PR
