// Siema Carousel

const mySiema = new Siema();

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

const mySiema2 = new Siema({
    selector: '.mySiema'
});

document.querySelector('.prev2').addEventListener('click', () => mySiema2.prev());
document.querySelector('.next2').addEventListener('click', () => mySiema2.next());
