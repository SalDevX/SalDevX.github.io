// menu.js
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuLinks = document.getElementById('menu-links');
    const menuItems = document.querySelectorAll('.menu-item');

    // Function to show the menu
    function showMenu() {
        menuLinks.classList.remove('hidden');
        menuLinks.classList.add('show'); // Show menu links with fade-in effect

        // Stagger fade-in for each menu item
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1; // Fade in item
                item.style.transform = 'translateY(0)'; // Reset position
            }, index * 300); // Delay based on the index (adjust timing as needed)
        });
    }

    // Function to hide the menu with reverse animation (last item to first)
    function hideMenuReverse() {
        // Reverse animation for each menu item (from last to first)
        for (let i = menuItems.length - 1; i >= 0; i--) {
            const item = menuItems[i];
            setTimeout(() => {
                item.style.opacity = 0; // Fade out each item
                item.style.transform = 'translateY(-10px)'; // Move up out of view
            }, (menuItems.length - 1 - i) * 10); // Reverse delay based on index
        }

        // After the transition, hide the whole menu
        setTimeout(() => {
            menuLinks.classList.remove("show");
            menuLinks.classList.add("hidden");
        }, menuItems.length * 188); // Delay based on the number of items
    }

    // Toggle the menu visibility
    menuIcon.addEventListener("click", () => {
        if (menuLinks.classList.contains("hidden")) {
            showMenu(); // Show the menu with fade-in effect
        } else {
            hideMenuReverse(); // Hide the menu with reverse animation
        }
    });
});
