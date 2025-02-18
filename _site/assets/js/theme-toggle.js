document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle"); // Your menu button
    const body = document.body;
    const menu = document.getElementById("menu"); // Your menu container
    const storageKey = "theme";

    // Function to apply the theme
    function applyTheme(theme) {
        if (theme === "light") {
            body.classList.add("light");
            body.classList.remove("dark");
        } else {
            body.classList.add("dark");
            body.classList.remove("light");
        }
    }

    // Get theme from localStorage, default to "dark"
    let currentTheme = localStorage.getItem(storageKey) || "dark";
    applyTheme(currentTheme);

    // Theme toggle button event
    themeToggle.addEventListener("click", function () {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(currentTheme);
        localStorage.setItem(storageKey, currentTheme);
    });

    // Menu toggle button event
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("menu-open"); // Toggle menu visibility
    });
});
