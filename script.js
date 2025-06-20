function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
// script.js
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
