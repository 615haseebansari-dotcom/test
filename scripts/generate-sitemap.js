import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/cloud', priority: '0.9', changefreq: 'monthly' },
  { path: '/server', priority: '0.9', changefreq: 'monthly' },
  { path: '/hosting', priority: '0.9', changefreq: 'monthly' },
  { path: '/colocation', priority: '0.8', changefreq: 'monthly' },
  { path: '/managed-it-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.6', changefreq: 'monthly' },
  { path: '/agb', priority: '0.3', changefreq: 'yearly' },
  { path: '/impressum', priority: '0.3', changefreq: 'yearly' },
  { path: '/datenschutz', priority: '0.3', changefreq: 'yearly' }
];

function generateSitemap() {
  const baseUrl = 'https://wolkenbunker.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write to both public and dist directories
  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
  
  // Ensure dist directory exists
  const distDir = path.resolve(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.writeFileSync(path.resolve(__dirname, '../dist/sitemap.xml'), sitemap);
  
  console.log('Sitemap generated successfully!');
}

generateSitemap();