const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText;
        const increment = target / 200; // speed of counting

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            requestAnimationFrame(updateCount); // call next frame
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
function openPopup(event) {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }