export const scrollActive = (element) => {
  const scrollY = window.pageYOffset;
  const mainHeight = element.offsetHeight;
  mainTop = element.offsetTop - 58;
  mainId = element.getAttribute('id');

  (scrollY > mainTop && scrollY <= mainTop + mainHeight) ?
    document.querySelector('nav__link').classList.add('active-link') :
    document.querySelector('nav__link').classList.remove('active-link');
};
