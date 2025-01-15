const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.Menu nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});