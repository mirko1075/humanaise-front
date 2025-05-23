import fs from "fs";


const languages = ["en", "it", "es", "fr"];
const sections = ["home", "about", "services", "contact"];

export function generateSitemap({
  baseUrl,
  languages,
  sections,
}) {
  const today = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${languages
    .map((lang) =>
      sections
        .map(
          (section) => `
  <url>
    <loc>${baseUrl}/${lang}#${section}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${section === "home" ? "1.0" : "0.8"}</priority>
    ${languages
      .map(
        (alternateLang) => `
    <xhtml:link 
      rel="alternate" 
      hrefLang="${alternateLang}" 
      href="${baseUrl}/${alternateLang}#${section}"
    />`
      )
      .join("")}
  </url>`
        )
        .join("")
    )
    .join("")}
</urlset>`;

  fs.writeFileSync("src/public/sitemap.xml", sitemap);
}

generateSitemap({ baseUrl: "https://humanaise.com", languages, sections });
