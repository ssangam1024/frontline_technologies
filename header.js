async function loadHeader() {
    try {
      const response = await fetch('header.html');
      if (!response.ok) throw new Error('Failed to load header');
      const headerHTML = await response.text();
      
      // Insert header at top of body
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Load header after the DOM is ready
  document.addEventListener('DOMContentLoaded', loadHeader);