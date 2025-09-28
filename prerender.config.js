import { fileURLToPath, URL } from 'node:url';

// Routes to pre-render for SEO
export const routes = [
  '/',
  '/cloud',
  '/server', 
  '/hosting',
  '/colocation',
  '/managed-it-services',
  '/solutions',
  '/contact',
  '/about',
  '/testimonials',
  '/impressum',
  '/datenschutz',
  '/agb'
];

export default {
  routes,
  // Generate static HTML for each route
  generateBundle: true,
  // Include meta tags in pre-rendered HTML
  injectMeta: true
};