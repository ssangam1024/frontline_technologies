document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    });
  
    document.querySelectorAll('.leftText div').forEach(el => observer.observe(el));
  });
  
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