const petBurger = document.querySelector('.pets-burger');
const petNavigation = document.querySelector('.pets-header__navigation');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');
const logo = document.querySelector('.logo__wrapper');

const shadowPopup = document.querySelector('.shadowPopup');
const petCardsWrapper = document.querySelector('.pets__cards');
const petCard = document.querySelectorAll('.card');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

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
//body.addEventListener(toggleMenu);

petCard.forEach((item) => {
    item.addEventListener('click' , () => {
        popup.classList.add('open');
        shadowPopup.classList.add('open');
        body.classList.add('lock');
    })
})

popupClose.addEventListener ('click', () => {
        popup.classList.remove('open');
        shadowPopup.classList.remove('open');
        body.classList.remove('lock');
})

shadowPopup.addEventListener ('click', () => {
    popup.classList.remove('open');
    shadowPopup.classList.remove('open');
    body.classList.remove('lock');
})