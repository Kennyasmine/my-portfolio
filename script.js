document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".links-links");

    toggleButton.addEventListener("click", function() {
        menuItems.classList.toggle("active");
    });
});
