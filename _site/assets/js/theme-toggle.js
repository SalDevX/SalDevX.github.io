document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;
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

    toggle.addEventListener("click", function () {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(currentTheme);
        localStorage.setItem(storageKey, currentTheme);
    });
});


