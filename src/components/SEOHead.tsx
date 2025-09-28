import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOData, generateStructuredData } from '../utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
  overrides?: Partial<{
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage: string;
  }>;
}

export default function SEOHead({ overrides = {} }: SEOHeadProps) {
  const location = useLocation();
  const seoData = getSEOData(location.pathname);
  
  // Merge with overrides
  const finalSEO = {
    ...seoData,
    ...overrides
  };
  
  const structuredData = generateStructuredData(finalSEO, location.pathname);

  return (
    <Helmet>
      <title>{finalSEO.title}</title>
      <meta name="description" content={finalSEO.description} />
      {finalSEO.keywords && <meta name="keywords" content={finalSEO.keywords} />}
      {finalSEO.canonical && <link rel="canonical" href={finalSEO.canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalSEO.title} />
      <meta property="og:description" content={finalSEO.description} />
      <meta property="og:image" content={finalSEO.ogImage || "https://wolkenbunker.com/landingpage.png/image.png"} />
      <meta property="og:type" content={finalSEO.ogType || "website"} />
      {finalSEO.canonical && <meta property="og:url" content={finalSEO.canonical} />}
      <meta property="og:site_name" content="WolkenBunker" />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalSEO.title} />
      <meta name="twitter:description" content={finalSEO.description} />
      <meta name="twitter:image" content={finalSEO.ogImage || "https://wolkenbunker.com/landingpage.png/image.png"} />
      <meta name="twitter:site" content="@wolkenbunker" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="de" />
      <meta name="geo.region" content="DE" />
      <meta name="author" content="WolkenBunker Provider GmbH" />
      
      {/* Performance and Mobile */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#9333ea" />
      
      {/* SEO Enhancement */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="classification" content="business" />
    </Helmet>
  );
}