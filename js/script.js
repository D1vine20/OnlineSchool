// Burger
const headerMenu = document.querySelector('.header-menu');
const headerMenuIcon = document.querySelector('.header-menu__icon');
const mobile = document.querySelector('.mobile');

headerMenu.addEventListener('click', function() {
  headerMenuIcon.classList.toggle('active');
  mobile.classList.toggle('active');
  document.body.classList.toggle('no-scroll')
})

function noScroll() {
  headerMenuIcon.classList.toggle('active');
  mobile.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  document.body.classList.toggle('body');
}

// Slick Slider
$(document).ready(function() {
  $('.news__row').slick({
    responsive:[
      {
      breakpoint: 100000,
      settings: "unslick"
      },
      {
        breakpoint:321,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: false
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.school__row').slick({
    responsive:[
      {
      breakpoint: 100000,
      settings: "unslick"
      },
      {
        breakpoint:321,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: false
        }
      }
    ]
  });
});

// Mask number
document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.getElementById('number') 
  const maskOptions = { 
    mask: '+{7}(000)000-00-00' 
  }
  IMask(inputElement, maskOptions)

})

// Scroll 
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};

// Popup
let popupBlock = document.querySelector('.popup__block');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.popup-open');
let closePopupButton = document.querySelector('.popup__cross'); 

openPopupButtons.forEach((button) => { 
  button.addEventListener('click', (e) => { 
      e.preventDefault(); 
      popupBlock.classList.add('active'); 
      popup.classList.add('active');
      document.body.classList.toggle('no-scroll');
  })
});

closePopupButton.addEventListener('click',() => {
  popupBlock.classList.remove('active');
  popup.classList.remove('active');
  document.body.classList.toggle('no-scroll');
});

document.addEventListener('click', (e) => {
  if(e.target === popupBlock) {
      popupBlock.classList.remove('active');
      popup.classList.remove('active');
  }
});

let popupBlockReg = document.querySelector('.popup-reg__block');
let popupReg = document.querySelector('.popup-reg');
let openPopupButtonsReg = document.querySelectorAll('.popup-reg__open');
let closePopupButtonReg = document.querySelector('.popup-reg__cross'); 

openPopupButtonsReg.forEach((button) => { 
  button.addEventListener('click', (e) => { 
      e.preventDefault(); 
      popupBlock.classList.remove('active');
      popup.classList.remove('active');
      popupBlockReg.classList.add('active'); 
      popupReg.classList.add('active');
  })
});

closePopupButtonReg.addEventListener('click',() => {
  popupBlockReg.classList.remove('active');
  popupReg.classList.remove('active');
  document.body.classList.toggle('no-scroll');
});

document.addEventListener('click', (e) => {
  if(e.target === popupBlockReg) {
    popupBlockReg.classList.remove('active');
    popupReg.classList.remove('active');
  }
});

