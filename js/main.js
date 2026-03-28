/* ============================================================
   Royal Antique Home — Main JavaScript
   ============================================================ */

/* ---------- Navbar: Scroll behaviour ---------- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile Menu Toggle ---------- */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  if (!hamburger || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', true);
    mobileNav.setAttribute('aria-hidden', false);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileNav.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) closeMenu();
    else openMenu();
  });

  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMenu();
  });
})();

/* ---------- Active Nav Link ---------- */
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ---------- Scroll Animations ---------- */
(function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* ---------- Fallback Sample Data ---------- */
const SAMPLE_PRODUCTS = [
  {
    slug: 'imperial-gold-majesty-set',
    title: 'Imperial Gold Majesty Set',
    price: 3200,
    category: 'Living Room',
    description: 'A warm gold-toned sofa set with elegant carvings and plush cushions. It brings a graceful, classic touch while still feeling inviting and comfortable for everyday use.',
    image: 'https://res.cloudinary.com/djmyiuu5k/image/upload/v1774275995/55_hhvuth.png',
    instock: true,
    featured: true
  },
  {
    slug: 'imperial-silver-majesty-set',
    title: 'Imperial Silver Majesty Set',
    price: 3200,
    category: 'Living Room',
    description: 'A warm silver-toned sofa set with elegant carvings and plush cushions. It brings a graceful, classic touch while still feeling inviting and comfortable for everyday use.',
    image: 'https://res.cloudinary.com/djmyiuu5k/image/upload/v1774281113/13_b2lnrm.png',
    instock: true,
    featured: true
  },
  {
    slug: 'the-imperial-bedframe',
    title: 'The Imperial Bedframe',
    price: 4800,
    category: 'Bedroom',
    description: 'A statement bed frame with a low-profile silhouette and hand-carved headboard panel. Available in Queen and King sizes.',
    image: 'https://res.cloudinary.com/djmyiuu5k/image/upload/v1771267048/ChatGPT_Image_Feb_16_2026_06_37_16_PM_ip9w2r.png',
    instock: true,
    featured: true
  },
  {
    slug: 'the-heirloom-dining-table',
    title: 'The Heirloom Dining Table',
    price: 5500,
    category: 'Dining Room',
    description: 'A solid teak dining table for six, with a hand-oiled finish that deepens with age. Each table is unique — the grain tells the story.',
    image: 'https://res.cloudinary.com/djmyiuu5k/image/upload/v1771266819/5807522145226133035_121_lstrnd.jpg',
    instock: true,
    featured: true
  },
  {
    slug: 'volta-executive-office-desk',
    title: 'Volta Executive Office Desk',
    price: 2400,
    category: 'Executive Office',
    description: 'A minimal floating desk with integrated cable management and a matte black steel frame. Built for focus.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format&fit=crop',
    instock: false,
    featured: false
  },
  {
    slug: 'tema-wardrobe',
    title: 'Tema Wardrobe',
    price: 6200,
    category: 'Bedroom',
    description: 'Floor-to-ceiling sliding wardrobe in natural oak veneer with soft-close mechanisms and custom interior fittings.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    instock: true,
    featured: false
  },
  {
    slug: 'royal-midnight-elegance-set',
    title: 'Royal Midnight Elegance Set',
    price: 3200,
    category: 'Living Room',
    description: 'A refined sofa set with deep charcoal upholstery and subtle gold detailing. Its tufted design and sculpted frame give it a rich, timeless look that adds quiet luxury to any space.',
    image: 'https://res.cloudinary.com/djmyiuu5k/image/upload/v1774280116/12_zwwicy.png',
    instock: true,
    featured: false
  }
];

const SAMPLE_TESTIMONIALS = [
  {
    name: 'Abena Mensah',
    location: 'East Legon, Accra',
    item_purchased: 'The Lagos Sofa',
    testimonial: 'I was nervous ordering furniture online, but the moment I saw the sofa in my living room I knew I\'d made the right decision. It\'s solid, beautiful, and completely transformed the space. I\'ve had countless compliments.',
    rating: 5
  },
  {
    name: 'Kwame Asante',
    location: 'Tema',
    item_purchased: 'Kumasi Dining Table',
    testimonial: 'We ordered a custom dining table for our new home. The team was communicative, the craftsmanship is exceptional, and the piece arrived on time. Our family gathers around it every evening. Worth every pesewa.',
    rating: 5
  },
  {
    name: 'Ama Owusu',
    location: 'Cantonments, Accra',
    item_purchased: 'Tema Wardrobe',
    testimonial: 'The built-in wardrobe exceeded every expectation. The interior fittings are thoughtfully designed, the finish is perfect, and the installation team was professional and efficient. I would not hesitate to order again.',
    rating: 5
  }
];

/* ---------- Fetch Products from CMS ---------- */
async function fetchProducts() {
  try {
    const manifestRes = await fetch('/_products/manifest.json');
    if (!manifestRes.ok) throw new Error('No manifest');

    const slugs = await manifestRes.json();
    if (!slugs.length) throw new Error('Empty manifest');

    const products = await Promise.all(
      slugs.map(slug =>
        fetch(`/_products/${slug}.json`).then(r => r.json())
      )
    );
    return products;
  } catch (e) {
    console.warn('CMS products not available, using sample data:', e.message);
    return SAMPLE_PRODUCTS;
  }
}

/* ---------- Fetch Testimonials from CMS ---------- */
async function fetchTestimonials() {
  try {
    const manifestRes = await fetch('/_testimonials/manifest.json');
    if (!manifestRes.ok) throw new Error('No manifest');

    const slugs = await manifestRes.json();
    if (!slugs.length) throw new Error('Empty manifest');

    const testimonials = await Promise.all(
      slugs.map(slug =>
        fetch(`/_testimonials/${slug}.json`).then(r => r.json())
      )
    );
    return testimonials;
  } catch (e) {
    console.warn('CMS testimonials not available, using sample data:', e.message);
    return SAMPLE_TESTIMONIALS;
  }
}

/* ---------- Render Product Card ---------- */
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card fade-in';
  card.setAttribute('data-category', product.category);
  card.innerHTML = `
    <img
      src="${product.image}"
      alt="${product.title} — ${product.category} furniture by Royal Antique Home"
      class="product-card-img"
      loading="lazy"
    />
    <div class="product-card-body">
      <p class="product-category">${product.category}</p>
      <h3 class="product-name">${product.title}</h3>
      <span class="product-link">View Details &rarr;</span>
    </div>
  `;
  card.addEventListener('click', () => openProductModal(product));
  return card;
}

/* ---------- Render Testimonial Card ---------- */
function createTestimonialCard(t) {
  const stars = '★'.repeat(t.rating || 5);
  const card = document.createElement('div');
  card.className = 'testimonial-card fade-in';
  card.innerHTML = `
    <span class="quote-mark">&ldquo;</span>
    <p class="stars">${stars}</p>
    <p class="testimonial-text">${t.testimonial}</p>
    <p class="testimonial-author">${t.name}</p>
    <p class="testimonial-meta">${t.location}${t.item_purchased ? ' &middot; ' + t.item_purchased : ''}</p>
  `;
  return card;
}

/* ---------- Load Featured Products ---------- */
async function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;

  const products = await fetchProducts();
  container.innerHTML = '';
  const featured = products.filter(p => p.featured).slice(0, 3);

  // If no featured flagged, just show first 3
  const toShow = featured.length ? featured : products.slice(0, 3);
  toShow.forEach(p => container.appendChild(createProductCard(p)));
  triggerObserver(container.querySelectorAll('.fade-in'));
}

/* ---------- Load All Products ---------- */
async function loadAllProducts(filterCategory = 'All') {
  const container = document.getElementById('allProducts');
  if (!container) return;

  // Show skeletons while loading
  container.innerHTML = `
    <div class="loading-skeleton"></div>
    <div class="loading-skeleton"></div>
    <div class="loading-skeleton"></div>
  `;

  const products = await fetchProducts();
  container.innerHTML = '';

  const filtered = filterCategory === 'All'
    ? products
    : products.filter(p => p.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="no-results">No products found in this category.</p>';
    return;
  }

  filtered.forEach(p => container.appendChild(createProductCard(p)));
  triggerObserver(container.querySelectorAll('.fade-in'));
}

/* ---------- Load Testimonials ---------- */
async function loadTestimonials(containerId, limit = 0) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const testimonials = await fetchTestimonials();
  container.innerHTML = '';
  const items = limit > 0 ? testimonials.slice(0, limit) : testimonials;
  items.forEach(t => container.appendChild(createTestimonialCard(t)));
  triggerObserver(container.querySelectorAll('.fade-in'));
}

/* ---------- Helper: Observe new elements ---------- */
function triggerObserver(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}

/* ---------- Category Filter ---------- */
function initCategoryFilter() {
  const filterBar = document.querySelector('.filter-bar');
  if (!filterBar) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadAllProducts(btn.dataset.filter);
  });
}

/* ---------- Product Modal ---------- */
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');

function openProductModal(product) {
  if (!modal) return;
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.title;
  document.getElementById('modalCategory').textContent = product.category;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalDesc').textContent = product.description;

  const stockEl = document.getElementById('modalStock');
  stockEl.textContent = product.instock ? 'In Stock' : 'Out of Stock';
  stockEl.className = 'stock-badge ' + (product.instock ? 'in-stock' : 'out-of-stock');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', false);
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', true);
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeProductModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

/* ---------- Gallery Lightbox ---------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = items[index].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', false);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + items.length) % items.length;
    const img = items[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  items.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/* ---------- Form Handling ---------- */
function initForms() {
  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('[type="submit"]');
      const successMsg = form.querySelector('.form-success');
      const original = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const data = new FormData(form);
        const body = new URLSearchParams(data).toString();
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body
        });

        form.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
        }
      } catch (err) {
        console.error('Form error:', err);
        alert('There was an error. Please try again or contact us via WhatsApp.');
      } finally {
        submitBtn.textContent = original;
        submitBtn.disabled = false;
      }
    });
  });
}

/* ---------- Announcement Banner ---------- */
async function loadBanner() {
  try {
    const res = await fetch('/_data/banner.json');
    if (!res.ok) throw new Error('No banner data');
    const banner = await res.json();

    if (!banner.active || !banner.message) return;

    const el = document.getElementById('announcementBanner');
    const msg = document.getElementById('bannerMessage');
    const closeBtn = document.getElementById('bannerClose');

    if (!el || !msg) return;

    msg.textContent = banner.message;
    el.classList.add('active', banner.type || 'info');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        el.style.display = 'none';
      });
    }
  } catch {
    // No banner data — silently fail
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  loadBanner(); 
  loadFeaturedProducts();
  loadTestimonials('testimonialsPreview', 3);
  loadTestimonials('allTestimonials', 0);
  loadAllProducts();
  initCategoryFilter();
  initLightbox();
  initForms();
});