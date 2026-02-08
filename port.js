    // Auto update year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple fade-in animation on scroll
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
    // Smooth scroll for all anchor links
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