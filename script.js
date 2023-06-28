const burgerBtn = document.querySelector('.burger-btn');
const links = document.querySelector('.links');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  links.classList.toggle('open');
});
