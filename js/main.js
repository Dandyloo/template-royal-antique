/* ============================================================
   FURNISH GH — Main JavaScript
   ============================================================ */

/* ---------- Navbar: Scroll behaviour ---------- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load
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

  // Hamburger click
  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close button click
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMenu);
  }

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
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

/* ---------- Scroll Animations (IntersectionObserver) ---------- */
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

/* ---------- Sample Data (replace with CMS data in production) ---------- */
const SAMPLE_PRODUCTS = [
  {
    slug: 'the-versailles-sofa',
    title: 'The Versailles Sofa',
    price: 3200,
    category: 'Living Room',
    description: 'A commanding three-seater crafted from sustainably sourced hardwood and premium linen. Designed to anchor your living room with quiet authority.',
    image: 'https://res.cloudinary.com/djmyiuu5k/image/upload/v1771266680/5807522145226133032_121_zjn1fp.jpg',
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
    slug: 'volta-office-desk',
    title: 'Volta Office Desk',
    price: 2400,
    category: 'Office',
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
    slug: 'pra-lounge-chair',
    title: 'Pra Lounge Chair',
    price: 1800,
    category: 'Living Room',
    description: 'A sculptural accent chair that makes a room. High-density foam, hand-stitched upholstery, solid beech legs.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop',
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

/* ---------- Render Product Card ---------- */
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card fade-in';
  card.setAttribute('data-category', product.category);
  card.innerHTML = `
    <img
      src="${product.image}"
      alt="${product.title} — ${product.category} furniture by Furnish GH"
      class="product-card-img"
      loading="lazy"
    />
    <div class="product-card-body">
      <p class="product-category">${product.category}</p>
      <h3 class="product-name">${product.title}</h3>
      <p class="product-price">GHS ${product.price.toLocaleString()}</p>
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

/* ---------- Load Featured Products (Homepage) ---------- */
function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;

  container.innerHTML = '';
  const featured = SAMPLE_PRODUCTS.filter(p => p.featured).slice(0, 3);
  featured.forEach(p => container.appendChild(createProductCard(p)));

  // Re-observe new elements
  triggerObserver(container.querySelectorAll('.fade-in'));
}

/* ---------- Load All Products (Products Page) ---------- */
function loadAllProducts(filterCategory = 'All') {
  const container = document.getElementById('allProducts');
  if (!container) return;

  container.innerHTML = '';
  const filtered = filterCategory === 'All'
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter(p => p.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="no-results">No products found in this category.</p>';
    return;
  }

  filtered.forEach(p => container.appendChild(createProductCard(p)));
  triggerObserver(container.querySelectorAll('.fade-in'));
}

/* ---------- Load Testimonials ---------- */
function loadTestimonials(containerId, limit = 0) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  const items = limit > 0 ? SAMPLE_TESTIMONIALS.slice(0, limit) : SAMPLE_TESTIMONIALS;
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
  document.getElementById('modalPrice').textContent = `GHS ${product.price.toLocaleString()}`;
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

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

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

/* ---------- Form Handling (Netlify Forms) ---------- */
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

/* ---------- Init on DOM Ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProducts();
  loadTestimonials('testimonialsPreview', 3);
  loadTestimonials('allTestimonials', 0);
  loadAllProducts();
  initCategoryFilter();
  initLightbox();
  initForms();
});