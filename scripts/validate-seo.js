import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Validate SEO requirements for each page
function validateSEORequirements() {
  console.log('🔍 Validating SEO Requirements\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const indexPath = path.resolve(distPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.log('❌ index.html not found. Run "npm run build" first.');
    return;
  }

  const content = fs.readFileSync(indexPath, 'utf-8');
  
  const checks = [
    {
      name: 'Title Tag',
      test: () => content.includes('<title>'),
      required: true
    },
    {
      name: 'Meta Description',
      test: () => content.includes('<meta name="description"'),
      required: true
    },
    {
      name: 'H1 Tag in Noscript',
      test: () => content.match(/<noscript>[\s\S]*<h1>[\s\S]*<\/noscript>/i),
      required: true
    },
    {
      name: 'Open Graph Tags',
      test: () => content.includes('<meta property="og:title"'),
      required: true
    },
    {
      name: 'Twitter Cards',
      test: () => content.includes('<meta name="twitter:card"'),
      required: true
    },
    {
      name: 'Canonical URL',
      test: () => content.includes('<link rel="canonical"'),
      required: true
    },
    {
      name: 'Structured Data',
      test: () => content.includes('application/ld+json'),
      required: true
    },
    {
      name: 'Robots Meta',
      test: () => content.includes('<meta name="robots"'),
      required: true
    },
    {
      name: 'Language Declaration',
      test: () => content.includes('lang="de"'),
      required: true
    },
    {
      name: 'Viewport Meta',
      test: () => content.includes('<meta name="viewport"'),
      required: true
    }
  ];

  console.log('📋 SEO Checklist for index.html:\n');
  
  let passedChecks = 0;
  
  checks.forEach(check => {
    const passed = check.test();
    const status = passed ? '✅' : (check.required ? '❌' : '⚠️');
    console.log(`${status} ${check.name}`);
    
    if (passed) passedChecks++;
  });
  
  console.log(`\n📊 Score: ${passedChecks}/${checks.length} (${Math.round(passedChecks/checks.length*100)}%)`);
  
  if (passedChecks === checks.length) {
    console.log('🎉 Perfect SEO score!');
  } else {
    console.log('⚠️  Some SEO requirements are missing.');
  }
}

// Check file sizes for performance
function checkPerformance() {
  console.log('\n⚡ Performance Check\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const files = ['index.html', 'cloud.html', 'server.html'];
  
  files.forEach(file => {
    const filePath = path.resolve(distPath, file);
    
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      const status = sizeKB < 100 ? '✅' : sizeKB < 200 ? '⚠️' : '❌';
      console.log(`${status} ${file}: ${sizeKB} KB`);
    }
  });
}

// Run all validations
function runValidation() {
  validateSEORequirements();
  checkPerformance();
}

runValidation();