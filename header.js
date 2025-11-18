async function loadHeader() {
    try {
      const response = await fetch('header.html');
      if (!response.ok) throw new Error('Failed to load header');
      const headerHTML = await response.text();
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    } catch (error) {
      console.error(error);
    }
  }
  document.addEventListener('DOMContentLoaded', loadHeader);

 function openPopup(event) {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }