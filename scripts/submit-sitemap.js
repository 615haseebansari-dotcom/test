import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Script zum automatischen Einreichen der Sitemap bei Google
async function submitSitemapToGoogle() {
  console.log('📡 Submitting sitemap to Google Search Console...\n');
  
  const sitemapUrl = 'https://wolkenbunker.com/sitemap.xml';
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  try {
    const response = await fetch(pingUrl);
    
    if (response.ok) {
      console.log('✅ Sitemap successfully submitted to Google!');
      console.log(`📍 Sitemap URL: ${sitemapUrl}`);
    } else {
      console.log('⚠️  Sitemap submission may have failed');
      console.log(`Status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ Error submitting sitemap:', error.message);
  }
}

// Auch bei Bing einreichen
async function submitSitemapToBing() {
  console.log('📡 Submitting sitemap to Bing...\n');
  
  const sitemapUrl = 'https://wolkenbunker.com/sitemap.xml';
  const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  try {
    const response = await fetch(bingUrl);
    
    if (response.ok) {
      console.log('✅ Sitemap successfully submitted to Bing!');
    } else {
      console.log('⚠️  Bing sitemap submission may have failed');
    }
  } catch (error) {
    console.error('❌ Error submitting to Bing:', error.message);
  }
}

async function submitToSearchEngines() {
  console.log('🚀 Submitting sitemap to search engines...\n');
  
  await submitSitemapToGoogle();
  await submitSitemapToBing();
  
  console.log('\n📋 Next steps:');
  console.log('1. Verify your domain in Google Search Console');
  console.log('2. Submit sitemap manually in Search Console');
  console.log('3. Request indexing for important pages');
  console.log('4. Monitor indexing status');
}

submitToSearchEngines().catch(console.error);