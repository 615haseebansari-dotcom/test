import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Simulate different user agents to test bot detection
const userAgents = [
  {
    name: 'Googlebot',
    agent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    expectStatic: true
  },
  {
    name: 'Bingbot',
    agent: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    expectStatic: true
  },
  {
    name: 'Facebook Crawler',
    agent: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    expectStatic: true
  },
  {
    name: 'Twitter Bot',
    agent: 'Twitterbot/1.0',
    expectStatic: true
  },
  {
    name: 'Regular Browser',
    agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    expectStatic: false
  }
];

// Test URL with different user agents
async function testUserAgent(url, userAgent) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': userAgent.agent
      }
    });

    const html = await response.text();
    
    // Check if it's static HTML (contains pre-rendered content) or SPA
    const hasPrerenderedContent = html.includes('<div id="seo-content"') || 
                                  html.includes('<noscript>') ||
                                  html.includes('Enterprise Cloud Solutions');
    
    const hasH1 = html.match(/<h1[^>]*>.*?<\/h1>/i);
    const hasMetaDesc = html.match(/<meta name="description" content="[^"]*">/i);
    
    console.log(`\n🤖 ${userAgent.name}:`);
    console.log(`   User-Agent: ${userAgent.agent.substring(0, 60)}...`);
    console.log(`   Pre-rendered content: ${hasPrerenderedContent ? '✅' : '❌'}`);
    console.log(`   H1 tag found: ${hasH1 ? '✅' : '❌'}`);
    console.log(`   Meta description: ${hasMetaDesc ? '✅' : '❌'}`);
    
    if (hasH1) {
      const h1Text = hasH1[0].replace(/<[^>]*>/g, '');
      console.log(`   H1 content: "${h1Text.substring(0, 50)}..."`);
    }
    
    return {
      userAgent: userAgent.name,
      hasContent: hasPrerenderedContent,
      hasH1: !!hasH1,
      hasMetaDesc: !!hasMetaDesc
    };
    
  } catch (error) {
    console.log(`❌ Error testing ${userAgent.name}: ${error.message}`);
    return null;
  }
}

// Test local development server
async function testLocalServer() {
  console.log('🧪 Testing Local Development Server\n');
  console.log('=' .repeat(60));
  
  const testUrl = 'http://localhost:5173'; // Vite dev server
  
  console.log(`Testing URL: ${testUrl}`);
  
  for (const userAgent of userAgents) {
    await testUserAgent(testUrl, userAgent);
  }
}

// Test production build
async function testProductionBuild() {
  console.log('\n🏗️  Testing Production Build\n');
  console.log('=' .repeat(60));
  
  // Check if dist files exist
  const distPath = path.resolve(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run "npm run build" first.');
    return;
  }

  const files = ['index.html', 'cloud.html', 'server.html', 'contact.html'];
  
  for (const file of files) {
    const filePath = path.resolve(distPath, file);
    
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      const hasH1 = content.match(/<h1[^>]*>.*?<\/h1>/i);
      const hasMetaDesc = content.match(/<meta name="description" content="[^"]*">/i);
      const hasStructuredData = content.includes('application/ld+json');
      
      console.log(`\n📄 ${file}:`);
      console.log(`   H1 tag: ${hasH1 ? '✅' : '❌'}`);
      console.log(`   Meta description: ${hasMetaDesc ? '✅' : '❌'}`);
      console.log(`   Structured data: ${hasStructuredData ? '✅' : '❌'}`);
      
      if (hasH1) {
        const h1Text = hasH1[0].replace(/<[^>]*>/g, '');
        console.log(`   H1 content: "${h1Text.substring(0, 50)}..."`);
      }
    } else {
      console.log(`❌ ${file} not found in dist folder`);
    }
  }
}

// Test deployed site
async function testDeployedSite() {
  console.log('\n🌐 Testing Deployed Site\n');
  console.log('=' .repeat(60));
  
  const testUrl = 'https://wolkenbunker.com';
  
  console.log(`Testing URL: ${testUrl}`);
  
  const results = [];
  
  for (const userAgent of userAgents) {
    const result = await testUserAgent(testUrl, userAgent);
    if (result) results.push(result);
  }
  
  // Summary
  console.log('\n📊 Summary:');
  console.log('=' .repeat(40));
  
  const botResults = results.filter(r => r.userAgent !== 'Regular Browser');
  const browserResult = results.find(r => r.userAgent === 'Regular Browser');
  
  console.log(`\n🤖 Bots (should see static content):`);
  botResults.forEach(result => {
    console.log(`   ${result.userAgent}: ${result.hasH1 && result.hasContent ? '✅' : '❌'}`);
  });
  
  if (browserResult) {
    console.log(`\n👤 Browser (should see SPA):`);
    console.log(`   ${browserResult.userAgent}: ${browserResult.hasH1 ? '✅' : '❌'}`);
  }
}

// Main test runner
async function runTests() {
  const args = process.argv.slice(2);
  
  if (args.includes('--local')) {
    await testLocalServer();
  } else if (args.includes('--build')) {
    await testProductionBuild();
  } else if (args.includes('--deployed')) {
    await testDeployedSite();
  } else {
    console.log('🧪 WolkenBunker SEO Test Suite\n');
    console.log('Available test modes:');
    console.log('  --local     Test local development server');
    console.log('  --build     Test production build files');
    console.log('  --deployed  Test deployed site');
    console.log('\nExample: npm run test:seo -- --build');
  }
}

runTests().catch(console.error);