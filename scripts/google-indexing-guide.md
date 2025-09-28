# Google Indexierung für WolkenBunker SSG

## 🎯 Schritt-für-Schritt Anleitung

### 1. Google Search Console einrichten
1. Gehe zu [Google Search Console](https://search.google.com/search-console/)
2. Klicke auf "Property hinzufügen"
3. Wähle "Domain" und gib `wolkenbunker.com` ein
4. Verifiziere über DNS-Eintrag oder HTML-Meta-Tag

### 2. Sitemap einreichen
```bash
# Automatisch Sitemap bei Google einreichen
npm run submit:sitemap
```

**Manuell in Search Console:**
1. Gehe zu "Sitemaps" im linken Menü
2. Gib `sitemap.xml` ein
3. Klicke "Einreichen"

### 3. Wichtige URLs zur Indexierung anfordern
Gehe zu "URL-Prüfung" und fordere Indexierung an für:
- `https://wolkenbunker.com/` (Homepage)
- `https://wolkenbunker.com/cloud`
- `https://wolkenbunker.com/server`
- `https://wolkenbunker.com/hosting`
- `https://wolkenbunker.com/contact`

### 4. Pre-rendered Files überprüfen
```bash
# Überprüfe ob alle SEO-Dateien korrekt erstellt wurden
npm run check:indexing
```

### 5. Crawler-Test durchführen
```bash
# Teste ob Crawler die richtigen Inhalte sehen
npm run test:crawler
```

## 🤖 Wie das SSG-System funktioniert

### Pre-rendering Process
1. **Build**: `npm run build:seo` erstellt statische HTML-Dateien
2. **Redirects**: Netlify leitet Bots zu statischen Dateien weiter
3. **SPA**: Normale Nutzer bekommen die React-App

### Crawler vs. User Experience
- **Googlebot** → Sieht `cloud.html` mit vollständigem HTML-Content
- **Normale Nutzer** → Bekommen React SPA für beste UX

### Wichtige Dateien
- `scripts/prerender.js` - Erstellt statische HTML-Dateien
- `public/_redirects` - Netlify Routing für Crawler
- `src/utils/seo.ts` - SEO-Daten für alle Seiten
- `scripts/generate-sitemap.js` - XML-Sitemap Generator

## 📊 Monitoring & Optimierung

### Indexierung überwachen
1. **Search Console**: Überwache "Abdeckung" und "Leistung"
2. **Core Web Vitals**: Achte auf Performance-Metriken
3. **Mobile Usability**: Stelle sicher, dass alle Seiten mobilfreundlich sind

### SEO-Tests
```bash
# Teste SEO-Optimierung
npm run test:seo:build

# Teste deployed Version
npm run test:seo:deployed
```

## 🚀 Erweiterte Optimierungen

### Structured Data
- Bereits implementiert für alle Seiten
- Organization Schema für Unternehmensdaten
- WebPage Schema für jede Seite
- Breadcrumb Navigation

### Meta Tags
- Dynamische Title und Description
- Open Graph für Social Media
- Twitter Cards
- Canonical URLs

### Performance
- Preload wichtiger Ressourcen
- Optimierte Bilder
- CDN-Integration über Netlify

## ⚡ Quick Start Commands

```bash
# 1. Build mit SEO-Optimierung
npm run build:seo

# 2. Sitemap einreichen
npm run submit:sitemap

# 3. Indexierung überprüfen
npm run check:indexing

# 4. SEO testen
npm run test:seo:deployed
```

## 📈 Erwartete Indexierung

- **Sofort**: Homepage und wichtige Seiten
- **1-3 Tage**: Alle Hauptseiten (Cloud, Server, etc.)
- **1-2 Wochen**: Rechtliche Seiten (Impressum, Datenschutz)

Die SSG-Architektur sorgt dafür, dass Google vollständige HTML-Seiten crawlen kann, während Nutzer die schnelle React-Experience bekommen.