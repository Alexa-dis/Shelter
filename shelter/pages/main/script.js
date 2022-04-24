const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');
const logo = document.querySelector('.logo__wrapper');

const shadowPopup = document.querySelector('.shadowPopup');
const petCardsWrapper = document.querySelector('.pets__cards');
const petCard = document.querySelectorAll('.card');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

function toggleMenu() {
    burger.classList.toggle('open');
    navigation.classList.toggle('open');
    shadow.classList.toggle('open');
    logo.classList.toggle('open');
    body.classList.toggle('lock');
    //popup.classList.toggle('open');
    }

burger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);
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


//SLIDER
const petNames = ['Jennifer', 'Sophia', 'Woody', 'Scarlett',  'Katrine', 'Timmy', 'Freddie', 'Charly'];
const petImgs = ['../../assets/images/pets-jennifer.png', 
                '../../assets/images/pets-sophia.png',
                '../../assets/images/pets-woody.png',
                '../../assets/images/pets-scarlet.png',
                '../../assets/images/pets-katrine.png',
                '../../assets/images/pets-timmy.png',
                '../../assets/images/pets-freddie.png',
                '../../assets/images/pets-charly.png'];
const sliderButtonLeft = document.querySelector('.slider__arrow_left');
const sliderButtonRight = document.querySelector('.slider__arrow_right');
const sliderCards = document.querySelector('.slider__cards');
const cardsLeft = document.querySelector('.left_cards');
const cardsActive = document.querySelector('.active_cards');
const cardsRight = document.querySelector('.rigth_cards');


const moveLeft = () => {
    sliderCards.classList.add('transition-left');
    sliderButtonLeft.removeEventListener('click', moveLeft);
};

const moveRight = () => {
    sliderCards.classList.add('transition-right')
    sliderButtonRight.removeEventListener('click', moveRight);
}

sliderButtonLeft.addEventListener('click', moveLeft);
sliderButtonRight.addEventListener('click', moveRight)

sliderCards.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') {
        sliderCards.classList.remove('transition-left');
        //let randomNumber = Math.floor(Math.random() * 8);
        
        const leftItems = cardsLeft.innerHTML;

        cardsActive.innerHTML = leftItems;

        const card1 = document.createElement('div');
        card1.classList.add('card');
        card1.innerHTML = `
        <img src="${petImgs[Math.floor(Math.random() * 8)]}" alt="pets-woody">
        <h4 class="pet__name">${petNames[Math.floor(Math.random() * 8)]}</h4>
        <button class="button button_bordered">Learn more</button>`

        const card2 = document.createElement('div');
        card2.classList.add('card');
        card2.innerHTML = `
        <img src="${petImgs[Math.floor(Math.random() * 8)]}" alt="pets-woody">
        <h4 class="pet__name">${petNames[Math.floor(Math.random() * 8)]}</h4>
        <button class="button button_bordered">Learn more</button>`

        const card3 = document.createElement('div');
        card3.classList.add('card');
        card3.innerHTML = `
        <img src="${petImgs[Math.floor(Math.random() * 8)]}" alt="pets-woody">
        <h4 class="pet__name">${petNames[Math.floor(Math.random() * 8)]}</h4>
        <button class="button button_bordered">Learn more</button>`

        cardsLeft.innerHTML = '';
        cardsLeft.appendChild(card1);
        cardsLeft.appendChild(card2);
        cardsLeft.appendChild(card3);


    }
    else {
        sliderCards.classList.remove('transition-right');
    }
    sliderButtonLeft.addEventListener('click', moveLeft);
    sliderButtonRight.addEventListener('click', moveRight);
})