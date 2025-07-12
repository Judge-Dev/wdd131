// for responsive navbar
const toggleButton = document.getElementById('menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    const isOpen = navbarLinks.classList.toggle('active');
    toggleButton.textContent = isOpen ? '✖' : '☰';
});


// to-get-dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const now = new Date();
document.getElementById("lastModified").textContent = `Last Updated: ${now.toLocaleString()}`;
