import fs from "fs";

export function generateRobotsTxt(sitemapUrl) {
  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
}

const sitemapUrl = "https://humanaise.com/sitemap.xml";
const robotsTxt = generateRobotsTxt(sitemapUrl);
console.log(robotsTxt);
fs.writeFileSync("public/robots.txt", robotsTxt);