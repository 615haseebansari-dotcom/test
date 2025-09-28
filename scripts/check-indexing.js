import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Script zum Überprüfen der Indexierung
async function checkGoogleIndexing() {
  console.log('🔍 Checking Google indexing status...\n');
  
  const routes = [
    'https://wolkenbunker.com/',
    'https://wolkenbunker.com/cloud',
    'https://wolkenbunker.com/server',
    'https://wolkenbunker.com/hosting',
    'https://wolkenbunker.com/colocation',
    'https://wolkenbunker.com/managed-it-services',
    'https://wolkenbunker.com/solutions',
    'https://wolkenbunker.com/contact',
    'https://wolkenbunker.com/about',
    'https://wolkenbunker.com/testimonials'
  ];

  for (const url of routes) {
    try {
      // Check if page is indexed by searching for site:URL
      const searchUrl = `https://www.google.com/search?q=site:${encodeURIComponent(url)}`;
      console.log(`🔍 Checking: ${url}`);
      console.log(`   Search: ${searchUrl}`);
      
      // Note: This would need to be done manually or with Google Search Console API
      console.log('   Status: Manual check required in Google Search Console');
      
    } catch (error) {
      console.error(`❌ Error checking ${url}:`, error.message);
    }
  }
  
  console.log('\n📋 Manual indexing check:');
  console.log('1. Go to Google Search Console');
  console.log('2. Use "URL Inspection" tool');
  console.log('3. Enter each URL to check indexing status');
  console.log('4. Use "Request Indexing" for unindexed pages');
}

// Check if pre-rendered files are properly configured for crawlers
function checkCrawlerFiles() {
  console.log('\n🤖 Checking crawler-optimized files...\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const crawlerFiles = [
    'index.html',
    'cloud.html', 
    'server.html',
    'hosting.html',
    'colocation.html',
    'managed-it-services.html',
    'solutions.html',
    'contact.html',
    'about.html',
    'testimonials.html'
  ];

  let allFilesExist = true;

  crawlerFiles.forEach(file => {
    const filePath = path.resolve(distPath, file);
    const exists = fs.existsSync(filePath);
    
    console.log(`${exists ? '✅' : '❌'} ${file}`);
    
    if (exists) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const hasH1 = content.includes('<h1');
      const hasMetaDesc = content.includes('<meta name="description"');
      const hasStructuredData = content.includes('application/ld+json');
      
      console.log(`   H1: ${hasH1 ? '✅' : '❌'} | Meta: ${hasMetaDesc ? '✅' : '❌'} | JSON-LD: ${hasStructuredData ? '✅' : '❌'}`);
    } else {
      allFilesExist = false;
    }
  });

  return allFilesExist;
}

async function runIndexingCheck() {
  console.log('🚀 Google Indexing Check for WolkenBunker\n');
  console.log('=' .repeat(50));
  
  const filesOk = checkCrawlerFiles();
  
  if (filesOk) {
    console.log('\n✅ All pre-rendered files are ready for crawlers!');
    await checkGoogleIndexing();
  } else {
    console.log('\n❌ Some pre-rendered files are missing. Run "npm run build:seo" first.');
  }
}

runIndexingCheck().catch(console.error);