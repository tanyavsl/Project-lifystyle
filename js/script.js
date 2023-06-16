$(document).ready(function(){
    $('.services-slider').slick({
arrows: false,
slidesToShow: 4,
// centerMode: true,
swipe: true,
infinite: true,
autoplay: true,
autoplaySpeed: 1500,
touchThreshold: 10,
// variablrWidth: true,
responsive:[
    {
        breakpoint:1300,
        settings: {
        slidesToShow: 3
        }
    }, {
        breakpoint:915,
        settings: {
        slidesToShow: 2
        }
    }, {
        breakpoint:538,
        settings: {
        slidesToShow: 1,
        
        }
    }
]
    });
});


$(document).ready(function(){
    $('.offers-section-slider').slick({
        slidesToShow: 1,
        dots: true,
    });
});




const form = document.querySelector('.touch-get-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  form.reset();

});


const hamburgerEln = document.querySelector('.hamburger');
const navEln = document.querySelector('.heading-container-section-nav-list');


hamburgerEln.addEventListener('click', () => {
    hamburgerEln.classList.toggle('is-active');
    navEln.classList.toggle('is-active');
});





const showRegistButton = document.getElementById('showRegistButton');
const closeButton = document.querySelector('.regist-bg-icon');
const registBlock = document.querySelector('.regist');


const isRegistHidden = localStorage.getItem('registHidden');
if (isRegistHidden) {
  registBlock.style.display = 'none';
} else {
  registBlock.style.display = 'block';
}

showRegistButton.addEventListener('click', () => {
  registBlock.style.display = 'block';
  localStorage.removeItem('registHidden');
});

closeButton.addEventListener('click', () => {
  registBlock.style.display = 'none';
  localStorage.setItem('registHidden', 'true');
});



const learnMoreButton = document.getElementById('learnMoreButton');
const additionalInfo = document.querySelector('.additional-info');

learnMoreButton.addEventListener('click', () => {
  additionalInfo.classList.toggle('expand');
});






















