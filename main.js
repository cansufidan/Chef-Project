const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navbgOverlayEl = document.querySelector('.nav__bgOverlay')

const navOpen = () => {
    navList.classList.add('show');
    navbgOverlayEl.classList.add('active');
    document.body.style='visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
    navList.classList.remove('show');
    navbgOverlayEl.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width:100%; overflow-x: hidden';
}

navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click', navClose);
navbgOverlayEl.addEventListener('click', navClose);

// aos
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'

})

