async function loadFooter() {
    try {
      const response = await fetch('footer.html');
      if (!response.ok) throw new Error('Failed to load footer');
      const footerHTML = await response.text();
      document.body.insertAdjacentHTML('afterend', footerHTML);
    } catch (error) {
      console.error(error);
    }
  }
  document.addEventListener('DOMContentLoaded', loadFooter);