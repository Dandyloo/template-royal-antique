const fs = require('fs');
const path = require('path');

// Generate products manifest
const productsDir = path.join(__dirname, '_products');
const testimonialsDir = path.join(__dirname, '_testimonials');

if (fs.existsSync(productsDir)) {
  const slugs = fs.readdirSync(productsDir)
    .filter(f => f.endsWith('.json') && f !== 'manifest.json')
    .map(f => f.replace('.json', ''));
  
  fs.writeFileSync(
    path.join(productsDir, 'manifest.json'),
    JSON.stringify(slugs, null, 2)
  );
  console.log(`✅ Products manifest updated: ${slugs.length} products`);
}

if (fs.existsSync(testimonialsDir)) {
  const slugs = fs.readdirSync(testimonialsDir)
    .filter(f => f.endsWith('.json') && f !== 'manifest.json')
    .map(f => f.replace('.json', ''));
  
  fs.writeFileSync(
    path.join(testimonialsDir, 'manifest.json'),
    JSON.stringify(slugs, null, 2)
  );
  console.log(`✅ Testimonials manifest updated: ${slugs.length} testimonials`);
}