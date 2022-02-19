$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        fade: true
    });
})

const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.header__link');
const popupClose = document.querySelector('.popup__close')

popupOpen.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup__active');
});

popupClose.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup__active');
});