const SLIDER_ELEMENTS = ['element1.png', 'element2.png', 'element3.png', 'element4.png', 'element5.png'];

const slide = document.querySelector('.sliderContainer > img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsSection = document.querySelector('.dots');

function showSlide(n){
    n = n > SLIDER_ELEMENTS.length ? 1 : n;
    n = n < 1 ? SLIDER_ELEMENTS.length : n
    slide.src = `/assets/slider_items/${SLIDER_ELEMENTS[n-1]}`;
    sliderIndex = n;
    showDots();
    interval();
}

function showDots(){
    dotsSection.innerHTML = '';
    for(let i = 0; i < SLIDER_ELEMENTS.length; i++){
        // dotsSection.innerHTML += `<span class="dot" data-index='${i+1}'></span>`;



        if(i == sliderIndex-1){
            dotsSection.innerHTML += `<span class="dot active" data-index='${i+1}'></span>`;
        } else {
            dotsSection.innerHTML += `<span class="dot" data-index='${i+1}'></span>`;
        }
    }
}

function interval(){
    clearTimeout(skrol);
    skrol = setTimeout(() => {
        showSlide(sliderIndex + 1);
    }, 3000);
}

dotsSection.addEventListener('click', event => showSlide(parseInt(event.target.getAttribute('data-index'))))

let sliderIndex = 1;
let skrol;
showSlide(sliderIndex);
showDots();

prevBtn.addEventListener('click', () => showSlide(sliderIndex - 1));
nextBtn.addEventListener('click', () => showSlide(sliderIndex + 1));

