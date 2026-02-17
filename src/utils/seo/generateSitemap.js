import fs from "fs";

const baseUrl = "https://humanaise.com";
const languages = ["en", "it", "es", "fr"];

export function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  const languageAlternates = (path) =>
    languages
      .map(
        (lang) => `
    <xhtml:link
      rel="alternate"
      hrefLang="${lang}"
      href="${baseUrl}${path}"
    />`
      )
      .join("") +
    `
    <xhtml:link
      rel="alternate"
      hrefLang="x-default"
      href="${baseUrl}${path}"
    />`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>${languageAlternates("/")}
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
