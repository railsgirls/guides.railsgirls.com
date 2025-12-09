document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const toggleIcon = document.getElementById("toggle-icon");
    const body = document.body;

    // Check for saved user preference
    const darkModeEnabled = localStorage.getItem("dark-mode") === "true";
    if (darkModeEnabled) {
        body.classList.add("dark-mode");
        toggleIcon.src = "/images/moon-icon.png"; 
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);

        
        toggleIcon.src = isDarkMode ? "/images/moon-icon.png" : "/images/sun-icon.png";
    });
});
