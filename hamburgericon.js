const menuToggle = document.getElementById("menu-toggle");
    const popupMenu = document.getElementById("popupMenu");
    const closeMenu = document.getElementById("closeMenu");

    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      popupMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
      popupMenu.classList.remove("active");
    });
