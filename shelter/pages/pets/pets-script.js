const petBurger = document.querySelector('.pets-burger');
const petNavigation = document.querySelector('.pets-header__navigation');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');
const logo = document.querySelector('.logo__wrapper');

function toggleMenu() {
    petBurger.classList.toggle('open');
    petNavigation.classList.toggle('open');
    shadow.classList.toggle('open');
    logo.classList.toggle('open');
    body.classList.toggle('lock');
    }

petBurger.addEventListener('click', toggleMenu);
petNavigation.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);
logo.addEventListener('click', toggleMenu);
body.addEventListener(toggleMenu);