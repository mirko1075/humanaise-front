import fs from "fs";

const baseUrl = "https://humanaise.com";
const languages = ["en", "it", "es", "fr"];
const staticRoutes = ["", "/privacy-policy", "/terms-of-service", "/cookies", "/email-automation", "/preventivi-edilizia-cagliari", "/voice-agent-cagliari", "/whatsapp-business-automation-cagliari"];

function localizedUrl(language, route) {
  return `${baseUrl}/${language}${route}`;
}

function languageAlternates(route) {
  return languages
    .map(
      (lang) => `
    <xhtml:link
      rel="alternate"
      hrefLang="${lang}"
      href="${localizedUrl(lang, route)}"
    />`
    )
    .join("") +
    `
    <xhtml:link
      rel="alternate"
      hrefLang="x-default"
      href="${localizedUrl("en", route)}"
    />`;
}

function getRoutePriority(route) {
  if (route === "") return "1.0";
  if (["/email-automation", "/preventivi-edilizia-cagliari", "/voice-agent-cagliari", "/whatsapp-business-automation-cagliari"].includes(route)) return "0.8";
  return "0.3";
}

function getRouteChangefreq(route) {
  if (["", "/email-automation", "/preventivi-edilizia-cagliari", "/voice-agent-cagliari", "/whatsapp-business-automation-cagliari"].includes(route)) return "weekly";
  return "yearly";
}

export function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];
  const urls = staticRoutes.flatMap((route) =>
    languages.map(
      (language) => `  <url>
    <loc>${localizedUrl(language, route)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getRouteChangefreq(route)}</changefreq>
    <priority>${getRoutePriority(route)}</priority>${languageAlternates(route)}
  </url>`
    )
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
