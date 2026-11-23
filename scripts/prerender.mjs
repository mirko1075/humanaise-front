// Post-build: write dist/<path>/index.html for every sitemap URL with that page's
// <head> (title, description, canonical, hreflang, og/twitter, JSON-LD) baked in,
// so link previews and non-JS crawlers see the right tags. Body stays the SPA shell.
// ponytail: head only; prerender the body too (headless Chrome) only if SEO needs it.
import { build } from 'vite';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR_OUT = 'dist-prerender';
const ORIGIN = 'https://humanaise.com';

// noExternal: bundle deps so CJS-only packages (react-helmet-async) load under Node ESM.
await build({ logLevel: 'warn', build: { ssr: 'src/entry-prerender.tsx', outDir: SSR_OUT, emptyOutDir: true, copyPublicDir: false }, ssr: { noExternal: true } });

// LanguageProvider reads localStorage at render time; nothing else touches the browser.
const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };

const { renderHead } = await import(pathToFileURL(join(SSR_OUT, 'entry-prerender.js')).href);
const template = readFileSync(join(DIST, 'index.html'), 'utf8')
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta data-rh="true"[^>]*>\s*/g, '');

const urls = [...readFileSync(join(DIST, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const titles = new Set();

for (const url of urls) {
  const { pathname } = new URL(url);
  const lang = pathname.split('/')[1];
  store.clear();
  store.set('language', lang); // what LanguageProvider would read after Layout syncs it from the URL

  const h = renderHead(pathname);
  const head = ['title', 'meta', 'link', 'script'].map((k) => h[k].toString()).join('\n    ');
  const html = template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace('</head>', `    ${head}\n  </head>`);

  // Fail the build rather than ship wrong tags.
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  if (canonical !== url) throw new Error(`${url}: canonical is ${canonical}`);
  const title = h.title.toString();
  if (titles.has(title) && !/privacy|cookies|terms/.test(pathname)) throw new Error(`${url}: duplicate title ${title}`);
  titles.add(title);

  const out = join(DIST, pathname, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

rmSync(SSR_OUT, { recursive: true, force: true });
console.log(`prerendered <head> for ${urls.length} URLs`);
