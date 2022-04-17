const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');
const logo = document.querySelector('.logo__wrapper');

const petCards = document.querySelector('.pets__cards');
const petCard = document.querySelectorAll('.card');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

function toggleMenu() {
    burger.classList.toggle('open');
    navigation.classList.toggle('open');
    shadow.classList.toggle('open');
    logo.classList.toggle('open');
    body.classList.toggle('lock');
    }

burger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);
logo.addEventListener('click', toggleMenu);
body.addEventListener(toggleMenu);

// petCard.forEach((item) => {
//     item.addEventListener('click' , () => {
//         popup.style.display = 'block';
//         console.log(popup.style);
//         //popup.style.visibility = 'visible';
//         //shadow.classList.toggle('open');
//         //body.classList.toggle('lock');
//     })
// })

// const openPopup = () => {
//     petCards.forEach(petCard => {

//     })
// }

