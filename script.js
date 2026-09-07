const header = document.querySelector('.site-header');

const updateHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const updateActiveLink = () => {
  let currentSection = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) currentSection = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentSection}`);
  });
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();