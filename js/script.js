const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
// Parte Mobile 
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const anoAtual = document.getElementById('ano-atual');
anoAtual.textContent = new Date().getFullYear();