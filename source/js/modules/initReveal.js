const initReveal = () => {
  const targets = document.querySelectorAll('.skills__card, .project-card, .education__item, .resource-card');
  if (!targets.length || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  targets.forEach((el) => {
    observer.observe(el);
  });
};

export {initReveal};