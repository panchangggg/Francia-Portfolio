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

// Start on load
startAutoSlide();


/*let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.items');
  slider.appendChild(items[0]);   // move first to last
});

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.items');
  slider.prepend(items[items.length - 1]); // move last to first
});*/

// Auto update year
document.getElementById('year').textContent = new Date().getFullYear();

//fade-in animation 
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
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
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
