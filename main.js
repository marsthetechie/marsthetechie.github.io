// Siema Carousel

const mySiema = new Siema();

let currentMeSlide = 1;
let numOfMeSlides = document.querySelectorAll('.about-me').length;

document.querySelector('.next').addEventListener('click', () => {

    if (currentMeSlide === numOfMeSlides) {
        mySiema.prev(numOfMeSlides);
        currentMeSlide = 1;
    } else {
        mySiema.next();
        currentMeSlide++;
    }

});
document.querySelector('.prev').addEventListener('click', () => {

    if (currentMeSlide === 1) {
        mySiema.next(numOfMeSlides);
        currentMeSlide = numOfMeSlides;
    } else {
        mySiema.prev();
        currentMeSlide--;
    }

});

const mySiema2 = new Siema({
    selector: '.mySiema'
});

let currentSlide = 1;
let numOfSlides = document.querySelectorAll('.project').length;

document.querySelector('.next2').addEventListener('click', () => {

    if (currentSlide === numOfSlides) {
        mySiema2.prev(numOfSlides);
        currentSlide = 1;
    } else {
        mySiema2.next();
        currentSlide++;
    }

});


document.querySelector('.prev2').addEventListener('click', () => {

    if (currentSlide === 1) {
        mySiema2.next(numOfSlides);
        currentSlide = numOfSlides;
    } else {
        mySiema2.prev();
        currentSlide--;
    }

});