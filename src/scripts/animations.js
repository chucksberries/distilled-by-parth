// Intersection Observer scroll animations

document.addEventListener('DOMContentLoaded', () => {
  // --- Hero load animations ---
  const heroSmall = document.querySelector('[data-anim="hero-small"]');
  const heroHeadline = document.querySelector('[data-anim="hero-headline"]');
  const heroSub = document.querySelector('[data-anim="hero-sub"]');
  const heroBtn = document.querySelector('[data-anim="hero-btn"]');

  [heroSmall, heroHeadline, heroSub, heroBtn].forEach((el) => {
    if (el) el.classList.add('anim-ready');
  });

  requestAnimationFrame(() => {
    if (heroSmall) heroSmall.classList.add('anim-in');
    setTimeout(() => { if (heroHeadline) heroHeadline.classList.add('anim-in'); }, 100);
    setTimeout(() => { if (heroSub) heroSub.classList.add('anim-in'); }, 300);
    setTimeout(() => { if (heroBtn) heroBtn.classList.add('anim-in'); }, 500);
  });

  // --- Intersection Observer for scroll elements ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => {
          el.classList.add('anim-in');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  // Sections: fade up
  document.querySelectorAll('[data-anim="fade-up"]').forEach((el) => {
    el.classList.add('anim-ready', 'anim-fade-up');
    observer.observe(el);
  });

  // Cards: stagger fade up
  document.querySelectorAll('[data-anim="card"]').forEach((el) => {
    el.classList.add('anim-ready', 'anim-fade-up');
    observer.observe(el);
  });

  // Testimonial: fade from left
  document.querySelectorAll('[data-anim="fade-left"]').forEach((el) => {
    el.classList.add('anim-ready', 'anim-fade-left');
    observer.observe(el);
  });

  // Contact: fade from bottom
  document.querySelectorAll('[data-anim="fade-bottom"]').forEach((el) => {
    el.classList.add('anim-ready', 'anim-fade-bottom');
    observer.observe(el);
  });
});
