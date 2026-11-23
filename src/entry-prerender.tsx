// Build-time only: renders the real app for one URL so react-helmet-async
// collects that page's <head> tags. Used by scripts/prerender.mjs.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

export function renderHead(url: string): HelmetServerState {
  const context: { helmet?: HelmetServerState } = {};
  renderToString(
    <StaticRouter location={url}>
      <HelmetProvider context={context}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </HelmetProvider>
    </StaticRouter>
  );
  return context.helmet!;
}
