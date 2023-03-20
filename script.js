// document.getElementsByClassName('hamburger').addEventListener("click", changeHam);

let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('navigation');
let closeIcon = document.getElementById('close-icon');
let body = document.getElementById('body');

var i;
var slides = document.getElementsByClassName('testimonial');
var dots = document.getElementsByClassName('dot');
var dotContainer = document.getElementById('dot-container');

let width = window.innerWidth;
let height = window.innerHeight;


function changeHam() {
    
    hamburger.style.display = "none";

    nav.style.display = "block";

    closeIcon.style.display = "block";

    nav.style.transition = ".9s";

    body.style.background =  "url(./images/bg-tablet-pattern.svg) rgba(228, 229, 235, 0.973) no-repeat 100px -300px";
}

function changeClose() {
    hamburger.style.display = "block";

    nav.style.display = "none";

    closeIcon.style.display = "none";

    body.style.background = "url(./images/bg-tablet-pattern.svg) no-repeat 100px -300px";
}

function checkWidth() {
    if (width >= 1100) {
        dots.style.display = "none";}
}


checkWidth();


var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}
