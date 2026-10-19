const btn = document.getElementById('accordion-btn');
const content = document.getElementById('accordion-content');
const icon = document.querySelector('.icon');

btn.addEventListener('click', () => {
    content.classList.toggle('is-open');
    icon.classList.toggle('is-open');
})
