const header = document.querySelector('.header');
const body = document.body;
const hamburgerOpen = document.querySelector('.hamburger__open');
const hamburgerClose = document.querySelector('.hamburger__close');

let currentScroll;

hamburgerOpen.addEventListener('click', (e) => {
  e.preventDefault();
  currentScroll = pageYOffset;
  header.classList.add('open');
  body.classList.add('fixed');
});
hamburgerClose.addEventListener('click', (e) => {
  e.preventDefault();
  header.classList.remove('open');
  body.classList.remove('fixed');
  window.scrollTo(0, currentScroll);
});
