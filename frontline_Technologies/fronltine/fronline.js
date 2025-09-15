const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");
let images = document.querySelectorAll(".carousel img");

const imgWidth = 260; 


const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, images[0]);

images = document.querySelectorAll(".carousel img"); 

let index = 1; 
track.style.transform = `translateX(${-imgWidth * index}px)`;

function updateCarousel() {
track.style.transition = "transform 0.5s ease-in-out";
track.style.transform = `translateX(${-imgWidth * index}px)`;


dots.forEach((dot, i) => dot.classList.toggle("active", i === (index - 1 + dots.length) % dots.length));
}

function autoSlide() {
index++;
updateCarousel();
}

track.addEventListener("transitionend", () => {
if (index >= images.length - 1) {
track.style.transition = "none"; 
index = 1; 
track.style.transform = `translateX(${-imgWidth * index}px)`;
} else if (index <= 0) {
track.style.transition = "none"; 
index = images.length - 2; 
track.style.transform = `translateX(${-imgWidth * index}px)`;
}
});


dots.forEach((dot, i) => {
dot.addEventListener("click", () => {
    index = i + 1;
    updateCarousel();
});
});

setInterval(autoSlide, 2000);

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