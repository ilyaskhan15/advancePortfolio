const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');
const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-menu]');

function setTheme(theme) {
  root.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch (error) { /* storage can be unavailable */ }
  themeButton?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}

themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
menuButton?.addEventListener('click', () => {
  const isOpen = menu?.hasAttribute('data-open');
  if (isOpen) menu?.removeAttribute('data-open'); else menu?.setAttribute('data-open', '');
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.removeAttribute('data-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
