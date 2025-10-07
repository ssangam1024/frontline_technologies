const track = document.querySelector(".carousel-track");
let images = document.querySelectorAll(".carousel img");

const style = getComputedStyle(images[0]);
const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
let imgWidth = images[0].clientWidth + margin;

track.innerHTML += track.innerHTML;

images = document.querySelectorAll(".carousel img");

let index = 0;
track.style.transform = `translateX(${-imgWidth * index}px)`;

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;  
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(${-imgWidth * index}px)`;

        dots.forEach((d, j) => d.classList.toggle("active", j === i));
    });
});

function updateCarousel() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(${-imgWidth * index}px)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === (index - 1 + dots.length) % dots.length);
    });
}
let slideInterval = setInterval(autoSlide, 2000);

const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(slideInterval));
carousel.addEventListener("mouseleave", () => slideInterval = setInterval(autoSlide, 2000));

function autoSlide() {
    index++;
    track.style.transition = "transform 0.5s linear";
    track.style.transform = `translateX(${-imgWidth * index}px)`;

    const dotIndex = index % (images.length / 2);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === dotIndex));

    if (index >= images.length / 2) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = `translateX(0px)`;
        }, 500);
    }
}

window.addEventListener("resize", () => {
    const style = getComputedStyle(images[0]);
    const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
    imgWidth = images[0].clientWidth + margin;
    track.style.transition = "none"; 
    track.style.transform = `translateX(${-imgWidth * index}px)`;
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');  
        } else {
            entry.target.classList.remove('show'); 
        }
    });
}, { threshold: 0.2 }); 

document.querySelectorAll('.leftText div').forEach(el => observer.observe(el));

function displayMessage1() {
    const message = document.querySelector('.js-message1');
    message.style.display = (message.style.display === "block") ? "none" : "block";
}
function displayMessage2() {
    const message = document.querySelector('.js-message2');
    message.style.display = (message.style.display === "block") ? "none" : "block";
} 
function displayMessage3() {
    const message = document.querySelector('.js-message3');
    message.style.display = (message.style.display === "block") ? "none" : "block";
}
function displayMessage4() {
    const message = document.querySelector('.js-message4');
    message.style.display = (message.style.display === "block") ? "none" : "block";
}
function openPopup(event) {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }