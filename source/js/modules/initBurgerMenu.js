const headerNav = document.querySelector('[data-nav]');
const burgerBtn = document.querySelector('[data-nav-btn-open]');
const closeBtn = document.querySelector('[data-nav-btn-close]');
const menuLinks = document.querySelectorAll('[data-nav-link]');
const switchToggle = document.querySelector('.switch input[type="checkbox"]');
const body = document.body;

function openHeaderNav() {
  headerNav.classList.add('open');
  body.style.overflow = 'hidden';
}

function closeHeaderNav() {
  headerNav.classList.remove('open');
  body.style.overflow = '';
}

function isMobile() {
  return window.innerWidth < 992;
}

function initBurgerMenu(){
  menuLinks.forEach((link) => link.addEventListener('click', () => {
    if (isMobile()) {
      closeHeaderNav();
    }
  }));

  burgerBtn.addEventListener('click', openHeaderNav);
  closeBtn.addEventListener('click', closeHeaderNav);

  // Закрытие по клику вне меню (мобильный)
  document.addEventListener('click', (evt) => {
    if (!isMobile() || !headerNav.classList.contains('open')) {
      return;
    }
    if (!headerNav.contains(evt.target) && !burgerBtn.contains(evt.target)) {
      closeHeaderNav();
    }
  });

  // Закрытие по Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && headerNav.classList.contains('open')) {
      closeHeaderNav();
    }
  });
}

export {initBurgerMenu};