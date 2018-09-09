// Siema Carousel

const mySiema = new Siema();

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

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


document.querySelector('.prev2').addEventListener('click', () => mySiema2.prev());