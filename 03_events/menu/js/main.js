const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open');
    navMenu.classList.toggle('is-open');
})
