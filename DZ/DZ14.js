const SLIDER_ELEMENTS = ['element1.png', 'element2.png', 'element3.png'];

const slide = document.querySelector('.sliderContainer > img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsSection = document.querySelector('.dots');

function showSlide(n){
    prevBtn.style.display = n === 1 ? 'none' : 'flex';
    nextBtn.style.display = n === SLIDER_ELEMENTS.length ? 'none' : 'flex';

    slide.src = `/assets/slider_items/${SLIDER_ELEMENTS[n-1]}`;

    sliderIndex = n;
}

function showDots(){
    dotsSection.innerHTML = '';
    for(let i = 0; i < SLIDER_ELEMENTS.length; i++){
        dotsSection.innerHTML += `<span class="dot" data-index='${i+1}'></span>`;
    }
}

dotsSection.addEventListener('click', event => showSlide(parseInt(event.target.getAttribute('data-index'))))

let sliderIndex = 1;
showSlide(sliderIndex);
showDots()

prevBtn.addEventListener('click', () => showSlide(sliderIndex - 1));
nextBtn.addEventListener('click', () => showSlide(sliderIndex + 1));