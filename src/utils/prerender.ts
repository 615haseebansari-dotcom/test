// Pre-rendering utilities for SEO optimization
import { routes } from '../../prerender.config.js';

export function isPrerenderedRoute(pathname: string): boolean {
  return routes.includes(pathname);
}

export function getPrerenderedHTML(pathname: string): string | null {
  // This would be used in a full SSR setup
  // For now, we rely on the build-time pre-rendering
  return null;
}

// Ensure critical content is visible to crawlers
export function ensureCriticalContent() {
  // Add structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WolkenBunker Provider GmbH",
    "url": "https://wolkenbunker.com",
    "logo": "https://wolkenbunker.com/LOGO_WHITEBACK_03.png",
    "description": "Enterprise Cloud-Lösungen und IT-Infrastruktur Services aus deutschen Rechenzentren",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katharinenstraße 33",
      "addressLocality": "Hamburg",
      "postalCode": "20457",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-40-605337300",
      "contactType": "Kundendienst",
      "email": "info@wolkenbunker.de"
    }
  };

  return structuredData;
}