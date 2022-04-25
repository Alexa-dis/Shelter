const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');
const logo = document.querySelector('.logo__wrapper');



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




//SLIDER
const petNames = ['Jennifer', 'Sophia', 'Woody', 'Scarlett',  'Katrine', 'Timmy', 'Freddie', 'Charly', 'Pirat', 'Snow', 'Yta', 'Sunny'];
const petImgs = ['../../assets/images/pets-jennifer.png', 
                '../../assets/images/pets-sophia.png',
                '../../assets/images/pets-woody.png',
                '../../assets/images/pets-scarlet.png',
                '../../assets/images/pets-katrine.png',
                '../../assets/images/pets-timmy.png',
                '../../assets/images/pets-freddie.png',
                '../../assets/images/pets-charly.png',
                '../../assets/images/pets-pirat.png',
                '../../assets/images/pets-snow.png',
                '../../assets/images/pets-yta.png',
                '../../assets/images/pets-sunny.png'];
const sliderButtonLeft = document.querySelector('.slider__arrow_left');
const sliderButtonRight = document.querySelector('.slider__arrow_right');
const sliderCards = document.querySelector('.slider__cards');
const cardsLeft = document.querySelector('.left_cards');
const cardsActive = document.querySelector('.active_cards');
const cardsRight = document.querySelector('.rigth_cards');

const createCardTemplate = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${petImgs[randomArray[0]]}" alt="">
    <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
    <button class="button button_bordered">Learn more</button>`;
    return card;
}

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
    if(window.matchMedia('(min-width:1280px)').matches) {
        let randomArray = [];
        while (randomArray.length < 3) {
            let randomnumber = Math.floor(Math.random()*11) + 1;
            if(randomArray.indexOf(randomnumber) > -1) continue;
            randomArray[randomArray.length] = randomnumber;
        }

        if (animationEvent.animationName === 'move-left') {
            sliderCards.classList.remove('transition-left');
            
            const leftItems = cardsLeft.innerHTML;

            cardsActive.innerHTML = leftItems;

            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML = `
            <img src="${petImgs[randomArray[0]]}" alt="">
            <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            const card2 = document.createElement('div');
            card2.classList.add('card');
            card2.innerHTML = `
            <img src="${petImgs[randomArray[1]]}" alt="">
            <h4 class="pet__name">${petNames[randomArray[1]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            const card3 = document.createElement('div');
            card3.classList.add('card');
            card3.innerHTML = `
            <img src="${petImgs[randomArray[2]]}" alt="">
            <h4 class="pet__name">${petNames[randomArray[2]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            cardsLeft.innerHTML = '';
            cardsLeft.appendChild(card1);
            cardsLeft.appendChild(card2);
            cardsLeft.appendChild(card3);
        }
        else {
            sliderCards.classList.remove('transition-right')
            const rightItems = cardsRight.innerHTML;

            cardsActive.innerHTML = rightItems;

            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML = `
            <img src="${petImgs[randomArray[0]]}" alt="pets-woody">
            <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            const card2 = document.createElement('div');
            card2.classList.add('card');
            card2.innerHTML = `
            <img src="${petImgs[randomArray[1]]}" alt="pets-woody">
            <h4 class="pet__name">${petNames[randomArray[1]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            const card3 = document.createElement('div');
            card3.classList.add('card');
            card3.innerHTML = `
            <img src="${petImgs[randomArray[1]]}" alt="pets-woody">
            <h4 class="pet__name">${petNames[randomArray[1]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            cardsRight.innerHTML = '';
            cardsRight.appendChild(card1);
            cardsRight.appendChild(card2);
            cardsRight.appendChild(card3);
        }
    } else if (window.matchMedia('(min-width:768px)').matches) {
        let randomArray = [];
        while (randomArray.length < 2) {
            let randomnumber = Math.floor(Math.random()*11) + 1;
            if(randomArray.indexOf(randomnumber) > -1) continue;
            randomArray[randomArray.length] = randomnumber;
        }

        if (animationEvent.animationName === 'move-left') {
            sliderCards.classList.remove('transition-left');
            
            const leftItems = cardsLeft.innerHTML;

            cardsActive.innerHTML = leftItems;

            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML = `
            <img src="${petImgs[randomArray[0]]}" alt="">
            <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            const card2 = document.createElement('div');
            card2.classList.add('card');
            card2.innerHTML = `
            <img src="${petImgs[randomArray[1]]}" alt="">
            <h4 class="pet__name">${petNames[randomArray[1]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            cardsLeft.innerHTML = '';
            cardsLeft.appendChild(card1);
            cardsLeft.appendChild(card2);
        }
        else {
            sliderCards.classList.remove('transition-right')
            const rightItems = cardsRight.innerHTML;

            cardsActive.innerHTML = rightItems;

            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML = `
            <img src="${petImgs[randomArray[0]]}" alt="pets-woody">
            <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            const card2 = document.createElement('div');
            card2.classList.add('card');
            card2.innerHTML = `
            <img src="${petImgs[randomArray[1]]}" alt="pets-woody">
            <h4 class="pet__name">${petNames[randomArray[1]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            cardsRight.innerHTML = '';
            cardsRight.appendChild(card1);
            cardsRight.appendChild(card2);
        }
    } else if (window.matchMedia('(min-width:320px)').matches) {
        let randomArray = [];
        while (randomArray.length < 1) {
            let randomnumber = Math.floor(Math.random()*11) + 1;
            if(randomArray.indexOf(randomnumber) > -1) continue;
            randomArray[randomArray.length] = randomnumber;
        }

        if (animationEvent.animationName === 'move-left') {
            sliderCards.classList.remove('transition-left');
            
            const leftItems = cardsLeft.innerHTML;

            cardsActive.innerHTML = leftItems;

            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML = `
            <img src="${petImgs[randomArray[0]]}" alt="">
            <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            cardsLeft.innerHTML = '';
            cardsLeft.appendChild(card1);
        }
        else {
            sliderCards.classList.remove('transition-right')
            const rightItems = cardsRight.innerHTML;

            cardsActive.innerHTML = rightItems;

            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML = `
            <img src="${petImgs[randomArray[0]]}" alt="pets-woody">
            <h4 class="pet__name">${petNames[randomArray[0]]}</h4>
            <button class="button button_bordered">Learn more</button>`

            cardsRight.innerHTML = '';
            cardsRight.appendChild(card1);
        }
    }
    
    sliderButtonLeft.addEventListener('click', moveLeft);
    sliderButtonRight.addEventListener('click', moveRight);
    
})


//POPUP
const shadowPopup = document.querySelector('.shadowPopup');
const petCardsWrapper = document.querySelector('.pets__cards');
const petCard = document.querySelectorAll('.card');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

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