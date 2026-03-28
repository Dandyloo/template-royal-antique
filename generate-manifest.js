const fs = require('fs');
const path = require('path');

const dirs = [
  { dir: '_products', name: 'Products' },
  { dir: '_testimonials', name: 'Testimonials' },
  { dir: '_gallery', name: 'Gallery' },
  { dir: '_team', name: 'Team' },
];

dirs.forEach(({ dir, name }) => {
  const fullPath = path.join(__dirname, dir);

  // Create folder if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
    console.log(`📁 Created missing folder: ${dir}`);
  }

  const slugs = fs.readdirSync(fullPath)
    .filter(f => f.endsWith('.json') && f !== 'manifest.json')
    .map(f => f.replace('.json', ''));

  fs.writeFileSync(
    path.join(fullPath, 'manifest.json'),
    JSON.stringify(slugs, null, 2)
  );
  console.log(`✅ ${name} manifest updated: ${slugs.length} items`);
});

// Handle _data folder for hero and banner
const dataDir = path.join(__dirname, '_data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log(`📁 Created missing folder: _data`);
}

// Create default hero.json if it doesn't exist
const heroPath = path.join(dataDir, 'hero.json');
if (!fs.existsSync(heroPath)) {
  fs.writeFileSync(heroPath, JSON.stringify({
    title_line1: "Furniture Fit",
    title_line2: "For Royalty",
    subtitle: "Timeless antique masterpieces handcrafted to bring palace elegance into your home.",
    bg_image: "https://res.cloudinary.com/djmyiuu5k/image/upload/v1771266346/Generated_Image_February_16_2026_-_6_23PM_kwl2q3.png"
  }, null, 2));
  console.log(`✅ Default hero.json created`);
}

// Create default banner.json if it doesn't exist
const bannerPath = path.join(dataDir, 'banner.json');
if (!fs.existsSync(bannerPath)) {
  fs.writeFileSync(bannerPath, JSON.stringify({
    active: false,
    message: "",
    type: "info"
  }, null, 2));
  console.log(`✅ Default banner.json created`);
}

// Create default settings.json if it doesn't exist
const settingsPath = path.join(dataDir, 'settings.json');
if (!fs.existsSync(settingsPath)) {
  fs.writeFileSync(settingsPath, JSON.stringify({
    business_name: "Royal Antique Home",
    tagline: "Live like royalty.",
    phone: "+233244377967",
    whatsapp: "233501505501",
    email: "hello@royalantiquehome.com",
    address: "Spintex Road, Accra, Greater Accra, Ghana",
    hours: "Monday – Saturday: 9am – 6pm",
    facebook_url: "",
    instagram_url: "https://www.instagram.com/royalantiquehome",
    tiktok_url: "https://www.tiktok.com/@royal.antique.hom"
  }, null, 2));
  console.log(`✅ Default settings.json created`);
}