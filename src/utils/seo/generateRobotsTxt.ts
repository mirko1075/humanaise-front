export function generateRobotsTxt(sitemapUrl: string) {
  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
}