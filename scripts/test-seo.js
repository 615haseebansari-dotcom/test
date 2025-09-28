import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Test if pre-rendered files exist and contain proper SEO content
async function testPrerenderedFiles() {
  console.log('🔍 Testing pre-rendered files...\n');
  
  const routes = [
    { path: '/', file: 'index.html' },
    { path: '/cloud', file: 'cloud.html' },
    { path: '/server', file: 'server.html' },
    { path: '/hosting', file: 'hosting.html' },
    { path: '/colocation', file: 'colocation.html' },
    { path: '/managed-it-services', file: 'managed-it-services.html' },
    { path: '/solutions', file: 'solutions.html' },
    { path: '/contact', file: 'contact.html' },
    { path: '/about', file: 'about.html' },
    { path: '/testimonials', file: 'testimonials.html' }
  ];

  let allTestsPassed = true;

  for (const route of routes) {
    const filePath = path.resolve(__dirname, `../dist/${route.file}`);
    
    console.log(`📄 Testing: ${route.path} (${route.file})`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${route.file}`);
      allTestsPassed = false;
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Test for H1 tags
    const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi);
    if (h1Matches && h1Matches.length > 0) {
      console.log(`✅ H1 found: ${h1Matches[0].replace(/<[^>]*>/g, '').substring(0, 50)}...`);
    } else {
      console.log(`❌ No H1 tag found`);
      allTestsPassed = false;
    }

    // Test for meta description
    const metaDesc = content.match(/<meta name="description" content="([^"]*)">/i);
    if (metaDesc) {
      console.log(`✅ Meta description: ${metaDesc[1].substring(0, 50)}...`);
    } else {
      console.log(`❌ No meta description found`);
      allTestsPassed = false;
    }

    // Test for title tag
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) {
      console.log(`✅ Title: ${titleMatch[1].substring(0, 50)}...`);
    } else {
      console.log(`❌ No title tag found`);
      allTestsPassed = false;
    }

    // Test for structured data
    const structuredData = content.match(/<script type="application\/ld\+json">/i);
    if (structuredData) {
      console.log(`✅ Structured data found`);
    } else {
      console.log(`❌ No structured data found`);
      allTestsPassed = false;
    }

    // Test for noscript content
    const noscriptContent = content.match(/<noscript>[\s\S]*?<\/noscript>/i);
    if (noscriptContent) {
      console.log(`✅ Noscript fallback content found`);
    } else {
      console.log(`⚠️  No noscript content found`);
    }

    console.log(''); // Empty line for readability
  }

  if (allTestsPassed) {
    console.log('🎉 All SEO tests passed!');
  } else {
    console.log('⚠️  Some SEO tests failed. Check the output above.');
  }

  return allTestsPassed;
}

// Test if sitemap exists and is valid
function testSitemap() {
  console.log('🗺️  Testing sitemap...\n');
  
  const sitemapPath = path.resolve(__dirname, '../dist/sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ Sitemap not found at /dist/sitemap.xml');
    return false;
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  
  // Check if sitemap contains URLs
  const urlMatches = sitemapContent.match(/<loc>.*?<\/loc>/g);
  if (urlMatches && urlMatches.length > 0) {
    console.log(`✅ Sitemap contains ${urlMatches.length} URLs`);
    urlMatches.forEach(url => {
      console.log(`   ${url.replace(/<\/?loc>/g, '')}`);
    });
    return true;
  } else {
    console.log('❌ Sitemap contains no URLs');
    return false;
  }
}

// Test robots.txt
function testRobotsTxt() {
  console.log('\n🤖 Testing robots.txt...\n');
  
  const robotsPath = path.resolve(__dirname, '../dist/robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    console.log('❌ robots.txt not found');
    return false;
  }

  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  
  if (robotsContent.includes('Sitemap:')) {
    console.log('✅ robots.txt contains sitemap reference');
    return true;
  } else {
    console.log('❌ robots.txt missing sitemap reference');
    return false;
  }
}

// Main test function
async function runAllTests() {
  console.log('🧪 Starting SEO Tests for WolkenBunker\n');
  console.log('=' .repeat(50));
  
  const prerenderedTest = await testPrerenderedFiles();
  const sitemapTest = testSitemap();
  const robotsTest = testRobotsTxt();
  
  console.log('\n' + '=' .repeat(50));
  console.log('📊 Test Summary:');
  console.log(`Pre-rendered files: ${prerenderedTest ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Sitemap: ${sitemapTest ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Robots.txt: ${robotsTest ? '✅ PASS' : '❌ FAIL'}`);
  
  if (prerenderedTest && sitemapTest && robotsTest) {
    console.log('\n🎉 All SEO tests passed! Your site is ready for crawlers.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the issues above.');
  }
}

runAllTests().catch(console.error);