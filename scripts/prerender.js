import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Alle Routen mit SEO-optimiertem Content
const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Private Cloud Deutschland | WolkenBunker IT-Services',
    description: 'Private Cloud Deutschland ✓ DSGVO-konforme IT-Services ✓ Server-Hosting ✓ 99.9% Verfügbarkeit ✓ Deutsche Rechenzentren ✓ Jetzt kostenlos beraten lassen!',
    h1: 'Enterprise Cloud Solutions & IT-Services der Zukunft',
    content: `
      <main>
        <section>
          <h1>Enterprise Cloud Solutions & IT-Services der Zukunft</h1>
          <p>Unsere sichere, leistungsstarke und DSGVO-konforme Private Cloud bietet Unternehmen maßgeschneiderte IT-Infrastrukturlösungen.</p>
          <p>Ihre Daten. Ihr Geschäft. Unsere höchste Sicherheit.</p>
        </section>
        
        <section>
          <h2>Next-Gen Cloud Services</h2>
          <p>Moderne Cloud-Infrastrukturen für die digitale Transformation</p>
          <ul>
            <li>Hochverfügbare Infrastruktur - Maximale Verfügbarkeit</li>
            <li>ISO-zertifizierte Rechenzentren - Höchste Sicherheitsstandards</li>
            <li>DSGVO-Konformität - 100% Datenschutz-konform</li>
            <li>Deutsche Standorte - Rechenzentren in Deutschland</li>
          </ul>
        </section>
        
        <section>
          <h2>Kontakt</h2>
          <p>WolkenBunker Provider GmbH</p>
          <p>Katharinenstraße 33, 20457 Hamburg</p>
          <p>Tel: 040 524745540</p>
          <p>E-Mail: info@wolkenbunker.de</p>
        </section>
      </main>
    `
  },
  {
    path: '/cloud',
    file: 'cloud.html',
    title: 'Private Cloud Deutschland | IaaS PaaS SaaS WolkenBunker',
    description: 'Private Cloud Deutschland ✓ IaaS, PaaS, SaaS ✓ DSGVO-konforme Enterprise Cloud ✓ Virtuelle Maschinen ✓ 99.9% Verfügbarkeit ✓ Jetzt starten!',
    h1: 'Cloud',
    content: `
      <main>
        <section>
          <h1>Cloud</h1>
          <p>DSGVO-konforme Private Cloud Services aus deutschen Rechenzentren. Flexible und skalierbare Enterprise Cloud-Lösungen für Ihre IT-Infrastruktur.</p>
          <p>Private Cloud Made in Germany. DSGVO-konform. Maximale Sicherheit.</p>
        </section>
        
        <section>
          <h2>Sicherer Betrieb mit IaaS</h2>
          <ul>
            <li>99.9% Verfügbarkeit - Hohe Verfügbarkeit mit SLA-Garantie</li>
            <li>Volle Skalierbarkeit - Skalieren Sie Ihre Ressourcen nach Bedarf</li>
            <li>Optimierte Performance - Hochperformante SSD-Speicher</li>
          </ul>
        </section>
        
        <section>
          <h2>Unsere Leistungen</h2>
          <ul>
            <li>Virtuelle Maschinen - Flexible VM-Instanzen</li>
            <li>Redundante Speicherung - Hochverfügbare Speicherlösungen</li>
            <li>Backup & Recovery - Automatische Backups</li>
            <li>Managed Databases - Vollständig verwaltete Datenbanklösungen</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/server',
    file: 'server.html',
    title: 'Dedizierte Server Deutschland | Dell Enterprise Hardware',
    description: 'Dedizierte Server Deutschland ✓ Dell Enterprise Hardware ✓ Root Server ✓ Server Cluster ✓ 99.9% Verfügbarkeit ✓ Hamburg Frankfurt Berlin ✓ Jetzt konfigurieren!',
    h1: 'Server',
    content: `
      <main>
        <section>
          <h1>Server</h1>
          <p>Dedizierte Server-Hosting aus deutschen Rechenzentren. Hochperformante Enterprise-Server mit maximaler Kontrolle und Leistung.</p>
          <p>Dedizierte Server Deutschland. Enterprise Hardware. 99.9% Verfügbarkeit.</p>
        </section>
        
        <section>
          <h2>Warum WolkenBunker Server?</h2>
          <ul>
            <li>Dedizierte Server - Hochperformante dedizierte Server für maximale Leistung</li>
            <li>Maximale Sicherheit - Enterprise-Sicherheit mit Firewall, DDoS-Schutz</li>
            <li>Hohe Performance - SSD-Speicher, moderne CPUs und optimierte Netzwerkanbindung</li>
          </ul>
        </section>
        
        <section>
          <h2>Maximale Leistung</h2>
          <p>Dediziertes Server-Hosting zu günstigen Konditionen</p>
          <p>Nutzen Sie die volle Rechenpower unserer dedizierten Server und profitieren Sie von hochperformanter Dell-Hardware.</p>
        </section>
      </main>
    `
  },
  {
    path: '/hosting',
    file: 'hosting.html',
    title: 'Webhosting Deutschland | Linux VMware SSL WolkenBunker',
    description: 'Webhosting Deutschland ✓ Linux & VMware Hosting ✓ SSL inklusive ✓ DSGVO-konform ✓ Shared Hosting ✓ Deutsche Rechenzentren ✓ Jetzt starten!',
    h1: 'Hosting',
    content: `
      <main>
        <section>
          <h1>Hosting</h1>
          <p>Professionelles Webhosting Deutschland - DSGVO-konforme Hosting-Lösungen für Websites, E-Commerce und Anwendungen.</p>
          <p>Webhosting Deutschland. DSGVO-konform. SSL inklusive.</p>
        </section>
        
        <section>
          <h2>Why SHARED HOSTING</h2>
          <ul>
            <li>Virtuelle Hosting - Kostengünstige Hosting-Lösung für kleinere Websites</li>
            <li>Linux Hosting - Stabile und sichere Linux-basierte Hosting-Umgebung</li>
            <li>Sicherheit & Backup - Automatische Backups und umfassende Sicherheitsmaßnahmen</li>
          </ul>
        </section>
        
        <section>
          <h2>VMware Hosting</h2>
          <p>VMware-basierte Hosting-Lösungen bieten Ihnen maximale Flexibilität und Performance.</p>
        </section>
      </main>
    `
  },
  {
    path: '/colocation',
    file: 'colocation.html',
    title: 'Colocation Deutschland | Hamburg Frankfurt Berlin Rechenzentren',
    description: 'Colocation Deutschland ✓ Server-Unterbringung Hamburg Frankfurt Berlin ✓ ISO-zertifiziert ✓ 24/7 Überwachung ✓ Rack-Miete ✓ Jetzt anfragen!',
    h1: 'Colocation',
    content: `
      <main>
        <section>
          <h1>Colocation</h1>
          <p>Colocation Deutschland - Sichere Server-Unterbringung in ISO-zertifizierten Rechenzentren in Hamburg, Frankfurt und Berlin.</p>
          <p>Colocation Deutschland. ISO-zertifiziert. 24/7 Überwachung.</p>
        </section>
        
        <section>
          <h2>Unsere Standorte im Überblick</h2>
          <ul>
            <li>Hamburg - Rechenzentrum Hamburg mit 24/7 Überwachung</li>
            <li>Frankfurt - Rechenzentrum Frankfurt mit redundanter Stromversorgung</li>
            <li>Berlin - Rechenzentrum Berlin mit ISO-Zertifizierung</li>
          </ul>
        </section>
        
        <section>
          <h2>Colocation-Pakete</h2>
          <ul>
            <li>Halber Schrank - ab 199€ - Rackeinheiten 19" bis zu 21 HE</li>
            <li>Volles Kabinett - ab 399€ - Vollständig abschließbare Kabine bis zu 47 HE</li>
            <li>Custom Schrank - Individuell - Maßgeschneiderte Lösungen</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/managed-it-services',
    file: 'managed-it-services.html',
    title: 'Managed IT Services Deutschland | 24/7 IT-Outsourcing',
    description: 'Managed IT Services Deutschland ✓ 24/7 IT-Support ✓ Proaktive Wartung ✓ IT-Outsourcing ✓ DSGVO-konform ✓ Über 20 Zertifikate ✓ Jetzt beraten lassen!',
    h1: 'Managed IT Services',
    content: `
      <main>
        <section>
          <h1>Managed IT Services</h1>
          <p>Managed IT Services Deutschland - Professionelle IT-Betreuung und komplette Verwaltung Ihrer IT-Infrastruktur.</p>
          <p>Managed IT Deutschland. 24/7 Support. Proaktive Wartung.</p>
        </section>
        
        <section>
          <h2>Wieso WolkenBunker?</h2>
          <ul>
            <li>Rundum-Service - Umfassende IT-Betreuung von der Planung bis zur Wartung</li>
            <li>Mit Managed Expertise - Erfahrene IT-Spezialisten kümmern sich um Ihre IT</li>
            <li>Ihre Expertise - Konzentration auf Ihr Kerngeschäft</li>
            <li>Über 20 Zertifikate - Höchste Qualitätsstandards</li>
          </ul>
        </section>
        
        <section>
          <h2>Cloud-Lösungen und IT-Dienstleistungen</h2>
          <ul>
            <li>Proaktive Überwachung und Wartung Ihrer IT-Systeme</li>
            <li>24/7 Support und Helpdesk-Services</li>
            <li>Backup- und Disaster-Recovery-Lösungen</li>
            <li>Sicherheitsmanagement und Compliance</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/solutions',
    file: 'solutions.html',
    title: 'IT-Lösungen Deutschland | Backup Archivierung Recovery',
    description: 'IT-Lösungen Deutschland ✓ Cloud-Backup ✓ E-Mail-Archivierung ✓ Disaster Recovery ✓ Windows RDP ✓ Branchenlösungen ✓ DSGVO-konform ✓ Jetzt anfragen!',
    h1: 'Lösungen',
    content: `
      <main>
        <section>
          <h1>Lösungen</h1>
          <p>IT-Lösungen Deutschland - Umfassende Cloud-Backup, E-Mail-Archivierung und Disaster Recovery Lösungen.</p>
          <p>IT-Lösungen Deutschland. DSGVO-konform. Maßgeschneidert.</p>
        </section>
        
        <section>
          <h2>Unsere Lösungen</h2>
          <ul>
            <li>Cloud Backup - Sichere Datensicherung in der Cloud</li>
            <li>Cloud & Mail Archivierung - DSGVO-konforme E-Mail-Archivierung</li>
            <li>Windows RDP Cloud Server - Remote Desktop in der Cloud</li>
            <li>Webhosting - Professionelle Hosting-Lösungen</li>
            <li>Datenschutzkonformes Hosting - DSGVO-konforme Hosting-Services</li>
            <li>Disaster Recovery - Notfallwiederherstellung und Business Continuity</li>
          </ul>
        </section>
        
        <section>
          <h2>Branchenlösungen</h2>
          <ul>
            <li>Automobilindustrie - TISAX-konforme IT-Lösungen</li>
            <li>Luftfahrt - Hochverfügbare Private-Cloud-Plattformen</li>
            <li>Finanzdienstleistungen - BaFin-konforme Hosting-Umgebungen</li>
            <li>Gesundheitspflege - DSGVO-konforme Medizin-IT</li>
            <li>Fertigung & Industrie - MES, ERP und IIoT-Systeme</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/contact',
    file: 'contact.html',
    title: 'Kontakt WolkenBunker | Kostenlose IT-Beratung Hamburg',
    description: 'Kontakt WolkenBunker ✓ Kostenlose IT-Beratung ✓ Cloud-Experten Hamburg ✓ Tel: 040-524745540 ✓ 24h Antwortzeit ✓ Jetzt Termin vereinbaren!',
    h1: 'Sprechen Sie mit unseren Cloud-Experten',
    content: `
      <main>
        <section>
          <h1>Sprechen Sie mit unseren Cloud-Experten</h1>
          <p>Haben Sie Fragen zu Private Cloud, Server-Hosting oder Managed IT Services? Unsere zertifizierten IT-Experten beraten Sie kostenlos zu DSGVO-konformen IT-Lösungen aus deutschen Rechenzentren.</p>
          <p>Kostenlose IT-Beratung. DSGVO-konforme Lösungen. 24/7 Support.</p>
        </section>
        
        <section>
          <h2>Kontaktinformationen</h2>
          <ul>
            <li>Telefon: +49 (0) 40 524745540 - Mo-Fr 8:00-18:00 Uhr</li>
            <li>E-Mail: info@wolkenbunker.de - Rund um die Uhr verfügbar</li>
            <li>Adresse: Katharinenstraße 33, 20457 Hamburg, Deutschland</li>
          </ul>
        </section>
        
        <section>
          <h2>Warum WolkenBunker?</h2>
          <ul>
            <li>24/7 Support - Rund um die Uhr verfügbarer technischer Support</li>
            <li>DSGVO-konform - Ihre Daten werden nach höchsten Datenschutzstandards behandelt</li>
            <li>Zertifizierte Experten - Über 20 Zertifikate und langjährige Erfahrung</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/about',
    file: 'about.html',
    title: 'Über WolkenBunker | IT-Experten Hamburg seit 2020',
    description: 'Über WolkenBunker Provider GmbH ✓ IT-Experten Hamburg seit 2020 ✓ Private Cloud Spezialisten ✓ ISO-zertifiziert ✓ Ramin & Elmedin ✓ Jetzt kennenlernen!',
    h1: 'Wir sind WolkenBunker Provider',
    content: `
      <main>
        <section>
          <h1>Wir sind WolkenBunker Provider</h1>
          <p>WolkenBunker Provider GmbH - Ihr IT-Dienstleister für DSGVO-konforme Private Cloud und Enterprise IT-Services. Entwickelt und gehostet in deutschen Rechenzentren seit 2020.</p>
        </section>
        
        <section>
          <h2>Mission & Vision</h2>
          <p>Pioniere in der digitalen Evolution</p>
          <p>Wir sind Pioniere in der digitalen Evolution und gestalten die Zukunft mit innovativen Lösungen und einem klaren Fokus auf Kundenzufriedenheit.</p>
          <ul>
            <li>Innovation - Pioniere in der digitalen Evolution</li>
            <li>Kundenzufriedenheit - Ihre Zufriedenheit steht im Mittelpunkt</li>
            <li>Partnerschaften - Langfristige Partnerschaften basierend auf Vertrauen</li>
            <li>Datensicherheit - Höchste Sicherheitsstandards für Ihre Daten</li>
          </ul>
        </section>
        
        <section>
          <h2>Unsere Zertifizierungen</h2>
          <ul>
            <li>ISO-zertifizierte Rechenzentren - ISO 27001-zertifiziert</li>
            <li>DSGVO-Konformität - 100% Datenschutz-Grundverordnung konform</li>
            <li>Deutsche Standorte - Rechenzentren in Deutschland</li>
          </ul>
        </section>
        
        <section>
          <h2>Unser Team</h2>
          <p>Ramin Hossensade - CEO</p>
          <p>Elmedin Trnovac - CTO</p>
        </section>
      </main>
    `
  },
  {
    path: '/testimonials',
    file: 'testimonials.html',
    title: 'Kundenbewertungen WolkenBunker | 500+ zufriedene Kunden',
    description: 'Kundenbewertungen WolkenBunker ✓ 500+ zufriedene Kunden ✓ 4.9★ Bewertung ✓ Echte IT-Service Erfahrungen ✓ Bittermann Gruppe Case Study ✓ Jetzt lesen!',
    h1: 'Was unsere Kunden über uns sagen',
    content: `
      <main>
        <section>
          <h1>Was unsere Kunden über uns sagen</h1>
          <p>Kundenbewertungen WolkenBunker - Erfahren Sie aus erster Hand, wie unsere Private Cloud und IT-Services Unternehmen dabei helfen, ihre IT-Infrastruktur zu optimieren.</p>
          <p>Echte Kundenerfahrungen. Verifizierte Bewertungen. Erfolgreiche IT-Projekte.</p>
        </section>
        
        <section>
          <h2>Bittermann Gruppe – IT-Infrastruktur neu ausgerichtet</h2>
          <p>Die Zusammenarbeit mit WolkenBunker hat unsere IT-Infrastruktur auf ein neues Niveau gebracht. Wir haben endlich eine stabile, performante Umgebung und einen Partner, auf den wir uns verlassen können.</p>
          <p>Michael Bittermann - Geschäftsführer der Bittermann Gruppe</p>
        </section>
        
        <section>
          <h2>Weitere Kundenstimmen</h2>
          <ul>
            <li>Maria Schmidt, Tech Startup GmbH: "Die Cloud-Lösung von WolkenBunker hat unsere IT-Infrastruktur revolutioniert."</li>
            <li>Thomas Kellner, IT-Consulting: "Als Experte kann ich bestätigen, dass WolkenBunker eine der sichersten Lösungen am Markt bietet."</li>
            <li>Sarah Müller, Mittelstand AG: "Die Migration war nahtlos und der Support ist erstklassig."</li>
          </ul>
        </section>
        
        <section>
          <h2>Warum Unternehmen WolkenBunker vertrauen</h2>
          <ul>
            <li>DSGVO-Konform - 100% Datenschutz-Grundverordnung konform</li>
            <li>Made in Germany - Entwickelt und gehostet in Deutschland</li>
            <li>ISO-Zertifiziert - ISO 27001 zertifizierte Rechenzentren</li>
            <li>24/7 Support - Rund um die Uhr verfügbarer Support</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/impressum',
    file: 'impressum.html',
    title: 'Impressum | WolkenBunker Provider GmbH Hamburg',
    description: 'Impressum WolkenBunker Provider GmbH ✓ Katharinenstraße 33, Hamburg ✓ HRB 182215 ✓ Geschäftsführer: Ramin Hossensade, Elmedin Trnovac',
    h1: 'Impressum',
    content: `
      <main>
        <section>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
        </section>
        
        <section>
          <h2>Unternehmen</h2>
          <p>Firmenname: Wolkenbunker Provider GmbH</p>
          <p>Adresse: Katharinenstraße 33, 20457 Hamburg</p>
          <p>Telefon: 040 524745540</p>
          <p>E-Mail: info@wolkenbunker.de</p>
        </section>
        
        <section>
          <h2>Rechtliche Angaben</h2>
          <p>Geschäftsführung: Ramin Hossensade, Elmedin Trnovac</p>
          <p>Registereintrag: Handelsregister HRB 182215, Amtsgericht Hamburg</p>
          <p>Umsatzsteuer-ID: DE365419383</p>
        </section>
      </main>
    `
  },
  {
    path: '/datenschutz',
    file: 'datenschutz.html',
    title: 'Datenschutzerklärung | WolkenBunker Provider GmbH',
    description: 'Datenschutzerklärung WolkenBunker ✓ DSGVO-konforme Datenverarbeitung ✓ Informationen zum Datenschutz ✓ Ihre Rechte und unser Umgang mit Daten',
    h1: 'Datenschutz',
    content: `
      <main>
        <section>
          <h1>Datenschutz</h1>
          <p>Informationen zum Datenschutz und zur Verarbeitung Ihrer personenbezogenen Daten</p>
        </section>
        
        <section>
          <h2>Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        </section>
        
        <section>
          <h2>Datenerfassung auf dieser Website</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber WolkenBunker Provider GmbH.</p>
        </section>
        
        <section>
          <h2>Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.</p>
        </section>
      </main>
    `
  },
  {
    path: '/agb',
    file: 'agb.html',
    title: 'AGB | Allgemeine Geschäftsbedingungen WolkenBunker',
    description: 'AGB WolkenBunker Provider GmbH ✓ Allgemeine Geschäftsbedingungen ✓ Vertragsbedingungen für IT-Services ✓ Rechtliche Grundlagen',
    h1: 'Allgemeine Geschäftsbedingungen',
    content: `
      <main>
        <section>
          <h1>Allgemeine Geschäftsbedingungen</h1>
          <p>Geltungsbereich und Bedingungen für alle Vertragsverhältnisse mit der WolkenBunker Provider GmbH</p>
        </section>
        
        <section>
          <h2>1. Geltungsbereich dieser Allgemeinen Geschäftsbedingungen</h2>
          <p>Die folgenden Regelungen regeln sämtliche Vertragsverhältnisse zwischen der WolkenBunker Provider GmbH und ihren Kunden.</p>
        </section>
        
        <section>
          <h2>2. Vertragsschluss</h2>
          <p>Die Angebote von WolkenBunker Provider GmbH sind unverbindlich und ohne Verpflichtung.</p>
        </section>
      </main>
    `
  }
];

async function generatePrerenderedHTML() {
  console.log('🔄 Generating pre-rendered HTML for all pages...\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const templatePath = path.resolve(distPath, 'index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Template index.html not found in dist folder. Run "npm run build" first.');
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  let successCount = 0;

  for (const route of routes) {
    try {
      console.log(`📄 Generating: ${route.path} -> ${route.file}`);
      
      // Generate SEO-optimized HTML
      let html = template;
      
      // Update title
      html = html.replace(
        /<title>.*?<\/title>/i,
        `<title>${route.title}</title>`
      );
      
      // Update meta description
      html = html.replace(
        /<meta name="description" content=".*?">/i,
        `<meta name="description" content="${route.description}">`
      );
      
      // Update Open Graph
      html = html.replace(
        /<meta property="og:title" content=".*?">/i,
        `<meta property="og:title" content="${route.title}">`
      );
      
      html = html.replace(
        /<meta property="og:description" content=".*?">/i,
        `<meta property="og:description" content="${route.description}">`
      );
      
      // Update Twitter Cards
      html = html.replace(
        /<meta name="twitter:title" content=".*?">/i,
        `<meta name="twitter:title" content="${route.title}">`
      );
      
      html = html.replace(
        /<meta name="twitter:description" content=".*?">/i,
        `<meta name="twitter:description" content="${route.description}">`
      );
      
      // Update canonical URL
      const canonicalUrl = `https://wolkenbunker.com${route.path}`;
      html = html.replace(
        /<link rel="canonical" href=".*?">/i,
        `<link rel="canonical" href="${canonicalUrl}">`
      );
      
      html = html.replace(
        /<meta property="og:url" content=".*?">/i,
        `<meta property="og:url" content="${canonicalUrl}">`
      );
      
      // Inject SEO content directly into HTML body (visible for crawlers)
      const seoContent = `
        <!-- SEO Content for Crawlers -->
        <div id="seo-content" style="position: absolute; left: -9999px; top: -9999px; visibility: hidden;">
          ${route.content}
        </div>
      `;
      
      html = html.replace('<!--app-html-->', seoContent);
      
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": route.title,
        "description": route.description,
        "url": canonicalUrl,
        "inLanguage": "de-DE",
        "headline": route.h1,
        "isPartOf": {
          "@type": "WebSite",
          "name": "WolkenBunker",
          "url": "https://wolkenbunker.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "WolkenBunker Provider GmbH",
          "url": "https://wolkenbunker.com",
          "logo": "https://wolkenbunker.com/LOGO_WHITEBACK_03.png"
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
      if (route.path !== '/') {
        const pageNames = {
          '/cloud': 'Cloud Services',
          '/server': 'Server',
          '/hosting': 'Hosting',
          '/colocation': 'Colocation',
          '/managed-it-services': 'Managed IT Services',
          '/solutions': 'Lösungen',
          '/contact': 'Kontakt',
          '/about': 'Über uns',
          '/testimonials': 'Kundenstimmen',
          '/impressum': 'Impressum',
          '/datenschutz': 'Datenschutz',
          '/agb': 'AGB'
        };

        if (pageNames[route.path]) {
          structuredData.breadcrumb.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": pageNames[route.path],
            "item": canonicalUrl
          });
        }
      }
      
      const structuredDataScript = `
        <script type="application/ld+json">
          ${JSON.stringify(structuredData, null, 2)}
        </script>
      `;
      
      html = html.replace('</head>', `${structuredDataScript}</head>`);

      // Enhanced noscript content with proper HTML structure
      const noscriptContent = `
        <noscript>
          <div style="padding: 20px; font-family: Arial, sans-serif;">
            ${route.content}
            
            <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc;">
              <p><strong>WolkenBunker Provider GmbH</strong></p>
              <p>Katharinenstraße 33, 20457 Hamburg</p>
              <p>Tel: 040 524745540 | E-Mail: info@wolkenbunker.de</p>
            </footer>
          </div>
        </noscript>
      `;
      
      html = html.replace('</body>', `${noscriptContent}</body>`);

      // Write the file
      const filePath = path.resolve(distPath, route.file);
      fs.writeFileSync(filePath, html);
      
      console.log(`✅ Generated: ${route.file}`);
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error generating ${route.path}:`, error.message);
    }
  }

    path: '/testimonials',
    file: 'testimonials.html',
    title: 'Kundenbewertungen WolkenBunker | 500+ zufriedene Kunden',
    description: 'Kundenbewertungen WolkenBunker ✓ 500+ zufriedene Kunden ✓ 4.9★ Bewertung ✓ Echte IT-Service Erfahrungen ✓ Bittermann Gruppe Case Study ✓ Jetzt lesen!',
    h1: 'Was unsere Kunden über uns sagen',
    content: `
      <main>
        <section>
          <h1>Was unsere Kunden über uns sagen</h1>
          <p>Kundenbewertungen WolkenBunker - Erfahren Sie aus erster Hand, wie unsere Private Cloud und IT-Services Unternehmen dabei helfen, ihre IT-Infrastruktur zu optimieren.</p>
          <p>Echte Kundenerfahrungen. Verifizierte Bewertungen. Erfolgreiche IT-Projekte.</p>
        </section>
        
        <section>
          <h2>Bittermann Gruppe – IT-Infrastruktur neu ausgerichtet</h2>
          <p>Die Zusammenarbeit mit WolkenBunker hat unsere IT-Infrastruktur auf ein neues Niveau gebracht. Wir haben endlich eine stabile, performante Umgebung und einen Partner, auf den wir uns verlassen können.</p>
          <p>Michael Bittermann - Geschäftsführer der Bittermann Gruppe</p>
        </section>
        
        <section>
          <h2>Weitere Kundenstimmen</h2>
          <ul>
            <li>Maria Schmidt, Tech Startup GmbH: "Die Cloud-Lösung von WolkenBunker hat unsere IT-Infrastruktur revolutioniert."</li>
            <li>Thomas Kellner, IT-Consulting: "Als Experte kann ich bestätigen, dass WolkenBunker eine der sichersten Lösungen am Markt bietet."</li>
            <li>Sarah Müller, Mittelstand AG: "Die Migration war nahtlos und der Support ist erstklassig."</li>
          </ul>
        </section>
        
        <section>
          <h2>Warum Unternehmen WolkenBunker vertrauen</h2>
          <ul>
            <li>DSGVO-Konform - 100% Datenschutz-Grundverordnung konform</li>
            <li>Made in Germany - Entwickelt und gehostet in Deutschland</li>
            <li>ISO-Zertifiziert - ISO 27001 zertifizierte Rechenzentren</li>
            <li>24/7 Support - Rund um die Uhr verfügbarer Support</li>
          </ul>
        </section>
      </main>
    `
  },
  {
  console.log(`\n🎉 Successfully generated ${successCount}/${routes.length} pre-rendered pages!`);
  
  // Verify files exist
  console.log('\n📋 Verifying generated files:');
  routes.forEach(route => {
    const filePath = path.resolve(distPath, route.file);
    const exists = fs.existsSync(filePath);
    console.log(`${exists ? '✅' : '❌'} ${route.file}`);
  });
}

generatePrerenderedHTML().catch(console.error);