const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const now = new Date();
document.getElementById("lastModified").textContent = `Last Updated: ${now.toLocaleString()}`;
