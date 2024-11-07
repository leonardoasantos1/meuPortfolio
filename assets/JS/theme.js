const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); 
    hamburger.classList.toggle("active"); 
});

const darkIcon = document.getElementById('dark-mode-icon');
const lightIcon = document.getElementById('light-mode-icon');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    lightIcon.style.display = isDarkMode ? "none" : "block";
    darkIcon.style.display = isDarkMode ? "block" : "none";
};

navLinks.addEventListener('click', () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active"); 
});