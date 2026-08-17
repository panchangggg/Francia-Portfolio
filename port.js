let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');
let autoSlideInterval;
let autoDelay = 4000; // 4 seconds

function goNext() {
  let items = document.querySelectorAll('.items');
  slider.appendChild(items[0]);
}

function goPrev() {
  let items = document.querySelectorAll('.items');
  slider.prepend(items[items.length - 1]);
}

// Button controls
next.addEventListener('click', () => {
  goNext();
  resetAutoSlide();
});
prev.addEventListener('click', () => {
  goPrev();
  resetAutoSlide();
});

// Auto slide
function startAutoSlide() {
  autoSlideInterval = setInterval(goNext, autoDelay);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}
startAutoSlide();

// Auto update year
document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in animation
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = '0.6s ease';
  observer.observe(card);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* =============================================
   Project Details Data
   Replace `images` with real screenshots later —
   temporary placeholders are used for now.
   Replace `liveUrl` / `codeUrl` with real links.
============================================= */
const projectData = {
  evaccine: {
    tag: 'Web App',
    title: 'E-Vaccine Record System',
    description:
      'A digitized immunization record platform built for barangay health centers, replacing paper logbooks with a searchable, centralized database. Designed to reduce lost records and make it faster for health workers to check a child\'s vaccination history during walk-in visits.',
    images: [
      'https://placehold.co/300x200/ffe98f/333333?text=Dashboard',
      'https://placehold.co/300x200/ffe98f/333333?text=Patient+Record',
      'https://placehold.co/300x200/ffe98f/333333?text=Vaccine+Log'
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js'],
    features: [
      'Searchable patient records with vaccination history and due-date reminders',
      'Role-based access for health workers vs. administrators',
      'Dashboard summarizing coverage rates and upcoming schedules',
      'Printable immunization cards generated from stored records'
    ],
    role:
      'Sole developer — designed the database schema, built the PHP/MySQL backend, and implemented the admin dashboard and reporting views.',
    liveUrl: '',
    codeUrl: ''
  },
  furniture: {
    tag: 'E-Commerce Web',
    title: 'Wooden Furniture Shop',
    description:
      'A full online storefront for a local wooden furniture business, letting customers browse a catalog, filter by category, and check out without needing to message the shop directly for every order.',
    images: [
      'https://placehold.co/300x200/be9dcf/ffffff?text=Storefront',
      'https://placehold.co/300x200/be9dcf/ffffff?text=Product+Page',
      'https://placehold.co/300x200/be9dcf/ffffff?text=Checkout'
    ],
    stack: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Product catalog with category filters and search',
      'Shopping cart with quantity adjustment and live totals',
      'Simple checkout flow with order summary',
      'Admin panel for adding, editing, and removing products'
    ],
    role:
      'Full-stack developer — built the storefront UI, cart logic, and the admin panel used to manage inventory.',
    liveUrl: '',
    codeUrl: ''
  },
  flipit: {
    tag: 'Game App',
    title: 'Flip-It',
    description:
      'A lightweight memory-matching game designed for children aged 5–7, using large tappable cards, bright colors, and short rounds to keep the experience simple and encouraging rather than competitive.',
    images: [
      'https://placehold.co/300x200/ff9350/ffffff?text=Game+Board',
      'https://placehold.co/300x200/ff9350/ffffff?text=Card+Flip',
      'https://placehold.co/300x200/ff9350/ffffff?text=Win+Screen'
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Card-matching gameplay with a simple move counter',
      'Kid-friendly UI with large touch targets and bright feedback animations',
      'Adjustable difficulty via grid size (4, 8, or 12 cards)',
      'Encouraging win-screen with a replay option'
    ],
    role:
      'Solo project — designed the game logic, card-flip animations, and the difficulty settings.',
    liveUrl: '',
    codeUrl: ''
  }
};

/* Modal elements */
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalGallery = document.getElementById('modalGallery');
const modalStack = document.getElementById('modalStack');
const modalFeatures = document.getElementById('modalFeatures');
const modalRole = document.getElementById('modalRole');
const modalLinks = document.getElementById('modalLinks');

function openProjectModal(id) {
  const data = projectData[id];
  if (!data) return;

  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.description;

  modalGallery.innerHTML = '';
  data.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title + ' screenshot';
    modalGallery.appendChild(img);
  });

  modalStack.innerHTML = '';
  data.stack.forEach(tech => {
    const chip = document.createElement('span');
    chip.textContent = tech;
    modalStack.appendChild(chip);
  });

  modalFeatures.innerHTML = '';
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  modalRole.textContent = data.role;

  modalLinks.innerHTML = '';
  if (data.liveUrl) {
    const liveLink = document.createElement('a');
    liveLink.href = data.liveUrl;
    liveLink.target = '_blank';
    liveLink.rel = 'noopener';
    liveLink.className = 'btn btn-primary';
    liveLink.textContent = 'View Live';
    modalLinks.appendChild(liveLink);
  }
  if (data.codeUrl) {
    const codeLink = document.createElement('a');
    codeLink.href = data.codeUrl;
    codeLink.target = '_blank';
    codeLink.rel = 'noopener';
    codeLink.className = 'btn btn-outline';
    codeLink.textContent = 'View Code';
    modalLinks.appendChild(codeLink);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-link[data-project]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    openProjectModal(link.dataset.project);
  });
});

modalClose.addEventListener('click', closeProjectModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeProjectModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeProjectModal();
  }
});
