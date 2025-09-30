// SEO utilities for meta tags and structured data
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: "WolkenBunker: Private Cloud & IT-Services Deutschland",
  description: "DSGVO-konforme Private Cloud & IT-Services aus deutschen Rechenzentren. 99.9% Verfügbarkeit, ISO-zertifiziert, 24/7 Support.",
  canonical: "https://wolkenbunker.com/",
  ogImage: "https://wolkenbunker.com/landingpage.png/image.png",
  ogType: "website"
};

export const pageSEO: Record<string, SEOData> = {
  '/': {
    title: "Private Cloud Deutschland | WolkenBunker IT-Services",
    description: "Private Cloud Deutschland ✓ DSGVO-konforme IT-Services ✓ Server-Hosting ✓ 99.9% Verfügbarkeit ✓ Deutsche Rechenzentren ✓ Jetzt kostenlos beraten lassen!",
    canonical: "https://wolkenbunker.com/",
    ogImage: "https://wolkenbunker.com/landingpage.png/image.png",
    keywords: "Private Cloud Deutschland, DSGVO Cloud, IT Services Deutschland, Server Hosting, Enterprise Cloud",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WolkenBunker Provider GmbH",
      "url": "https://wolkenbunker.com",
      "logo": "https://wolkenbunker.com/LOGO_WHITEBACK_03.png",
      "description": "Enterprise Cloud-Lösungen und IT-Infrastruktur Services aus deutschen Rechenzentren"
    }
  },
  '/cloud': {
    title: "Private Cloud Deutschland | IaaS PaaS SaaS WolkenBunker",
    description: "Private Cloud Deutschland ✓ IaaS, PaaS, SaaS ✓ DSGVO-konforme Enterprise Cloud ✓ Virtuelle Maschinen ✓ 99.9% Verfügbarkeit ✓ Jetzt starten!",
    canonical: "https://wolkenbunker.com/cloud",
    ogImage: "https://wolkenbunker.com/cloud.webp",
    keywords: "Private Cloud, IaaS, PaaS, SaaS, Virtuelle Maschinen, Enterprise Cloud Deutschland"
  },
  '/server': {
    title: "Dedizierte Server Deutschland | Dell Enterprise Hardware",
    description: "Dedizierte Server Deutschland ✓ Dell Enterprise Hardware ✓ Root Server ✓ Server Cluster ✓ 99.9% Verfügbarkeit ✓ Hamburg Frankfurt Berlin ✓ Jetzt konfigurieren!",
    canonical: "https://wolkenbunker.com/server",
    ogImage: "https://wolkenbunker.com/server.webp",
    keywords: "Dedizierte Server Deutschland, Dell Server, Root Server, Server Cluster, Enterprise Hardware"
  },
  '/hosting': {
    title: "Webhosting Deutschland | Linux VMware SSL WolkenBunker",
    description: "Webhosting Deutschland ✓ Linux & VMware Hosting ✓ SSL inklusive ✓ DSGVO-konform ✓ Shared Hosting ✓ Deutsche Rechenzentren ✓ Jetzt starten!",
    canonical: "https://wolkenbunker.com/hosting",
    ogImage: "https://wolkenbunker.com/hosting.webp",
    keywords: "Webhosting Deutschland, Linux Hosting, VMware Hosting, SSL Zertifikate, Shared Hosting"
  },
  '/colocation': {
    title: "Colocation Deutschland | Hamburg Frankfurt Berlin Rechenzentren",
    description: "Colocation Deutschland ✓ Server-Unterbringung Hamburg Frankfurt Berlin ✓ ISO-zertifiziert ✓ 24/7 Überwachung ✓ Rack-Miete ✓ Jetzt anfragen!",
    canonical: "https://wolkenbunker.com/colocation",
    ogImage: "https://wolkenbunker.com/colocation.webp",
    keywords: "Colocation Deutschland, Server Unterbringung, Rechenzentren Hamburg Frankfurt Berlin, Rack Miete"
  },
  '/managed-it-services': {
    title: "Managed IT Services Deutschland | 24/7 IT-Outsourcing",
    description: "Managed IT Services Deutschland ✓ 24/7 IT-Support ✓ Proaktive Wartung ✓ IT-Outsourcing ✓ DSGVO-konform ✓ Über 20 Zertifikate ✓ Jetzt beraten lassen!",
    canonical: "https://wolkenbunker.com/managed-it-services",
    ogImage: "https://wolkenbunker.com/managed-it.webp",
    keywords: "Managed IT Services Deutschland, IT Outsourcing, 24/7 IT Support, Proaktive IT Wartung"
  },
  '/solutions': {
    title: "IT-Lösungen Deutschland | Backup Archivierung Recovery",
    description: "IT-Lösungen Deutschland ✓ Cloud-Backup ✓ E-Mail-Archivierung ✓ Disaster Recovery ✓ Windows RDP ✓ Branchenlösungen ✓ DSGVO-konform ✓ Jetzt anfragen!",
    canonical: "https://wolkenbunker.com/solutions",
    ogImage: "https://wolkenbunker.com/loesungen.webp",
    keywords: "IT Lösungen Deutschland, Cloud Backup, E-Mail Archivierung, Disaster Recovery, Windows RDP"
  },
  '/contact': {
    title: "Kontakt WolkenBunker | Kostenlose IT-Beratung Hamburg",
    description: "Kontakt WolkenBunker ✓ Kostenlose IT-Beratung ✓ Cloud-Experten Hamburg ✓ Tel: 040-605337300 ✓ 24h Antwortzeit ✓ Jetzt Termin vereinbaren!",
    canonical: "https://wolkenbunker.com/contact",
    ogImage: "https://wolkenbunker.com/LOGO_WHITEBACK_03.png",
    keywords: "WolkenBunker Kontakt, IT Beratung Hamburg, Cloud Experten, Kostenlose Beratung"
  },
  '/about': {
    title: "Über WolkenBunker | IT-Experten Hamburg seit 2020",
    description: "Über WolkenBunker Provider GmbH ✓ IT-Experten Hamburg seit 2020 ✓ Private Cloud Spezialisten ✓ ISO-zertifiziert ✓ Ramin & Elmedin ✓ Jetzt kennenlernen!",
    canonical: "https://wolkenbunker.com/about",
    ogImage: "https://wolkenbunker.com/08.webp",
    keywords: "WolkenBunker Über uns, IT Experten Hamburg, Private Cloud Spezialisten, Ramin Hossensade, Elmedin Trnovac"
  },
  '/testimonials': {
    title: "Kundenbewertungen WolkenBunker | 500+ zufriedene Kunden",
    description: "Kundenbewertungen WolkenBunker ✓ 500+ zufriedene Kunden ✓ 4.9★ Bewertung ✓ Echte IT-Service Erfahrungen ✓ Bittermann Gruppe Case Study ✓ Jetzt lesen!",
    canonical: "https://wolkenbunker.com/testimonials",
    ogImage: "https://wolkenbunker.com/LOGO_WHITEBACK_03.png",
    keywords: "WolkenBunker Bewertungen, Kundenerfahrungen, IT Service Testimonials, Bittermann Gruppe"
  }
};

export function getSEOData(pathname: string): SEOData {
  return pageSEO[pathname] || defaultSEO;
}

export function generateStructuredData(seoData: SEOData, pathname: string) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData.title,
    "description": seoData.description,
    "url": seoData.canonical,
    "inLanguage": "de-DE",
    "isPartOf": {
      "@type": "WebSite",
      "name": "WolkenBunker",
      "url": "https://wolkenbunker.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startseite",
          "item": "https://wolkenbunker.com/"
        }
      ]
    }
  };

  // Add page-specific breadcrumb
  if (pathname !== '/') {
    const pageNames: Record<string, string> = {
      '/cloud': 'Cloud Services',
      '/server': 'Server',
      '/hosting': 'Hosting',
      '/colocation': 'Colocation',
      '/managed-it-services': 'Managed IT Services',
      '/solutions': 'Lösungen',
      '/contact': 'Kontakt',
      '/about': 'Über uns',
      '/testimonials': 'Kundenstimmen'
    };

    if (pageNames[pathname]) {
      baseStructuredData.breadcrumb.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageNames[pathname],
        "item": `https://wolkenbunker.com${pathname}`
      });
    }
  }

  return seoData.structuredData || baseStructuredData;
}