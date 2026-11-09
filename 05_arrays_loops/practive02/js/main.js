const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];
const colorPreview = document.getElementById('color-preview');
const colorBtns = document.querySelectorAll('.color-btn');

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        for (let j = 0; j < colorBtns.length; j++) {
            colorBtns[j].classList.remove('is-active');
        }

        colorBtns[i].classList.add('is-active');

        console.log(colorBtns[i].getAttribute('type'));
        const colorName = colorBtns[i].textContent;
        const colorCode = colorCodes[i];

        colorPreview.style.backgroundColor = colorCode;
        colorPreview.style.color = '#fff';
        colorPreview.textContent = `${colorName}（${colorCode}）`;
    })
}

const links = document.querySelectorAll('a[href^="http"]');
console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
    links[i].setAttribute('rel', 'noopener noreferrer');
    links[i].textContent += '↗️';
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtns.length; j++) {
            tabBtns[j].classList.remove('is-active');
            tabPanels[j].classList.remove('is-active');
        }
        tabBtns[i].classList.add('is-active');
        tabPanels[i].classList.add('is-active');
    })
}
