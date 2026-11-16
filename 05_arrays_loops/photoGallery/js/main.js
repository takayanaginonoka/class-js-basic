const mainImg = document.getElementById('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbImgs = document.querySelectorAll('.thumb-img');

let currentIndex = 0;


for (let i = 0; i < thumbImgs.length; i++) {
    thumbImgs[i].addEventListener('click', () => {
        currentIndex = i;

        for (let j = 0; j < thumbImgs.length; j++) {
            thumbImgs[j].classList.remove('is-active');
        }

        let thumbSrc = thumbImgs[i].getAttribute('src');
        mainImg.setAttribute('src', thumbSrc);
        let text = thumbImgs[i].getAttribute('alt');
        captionText.textContent = `${currentIndex + 1} / 4 : ${text}`;
        thumbImgs[i].classList.add('is-active');
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 3;
    }

    for (let j = 0; j < thumbImgs.length; j++) {
        thumbImgs[j].classList.remove('is-active');
    }

    let thumbSrc = thumbImgs[currentIndex].getAttribute('src');
    mainImg.setAttribute('src', thumbSrc);
    let text = thumbImgs[currentIndex].getAttribute('alt');
    captionText.textContent = `${currentIndex + 1} / 4 : ${text}`;
    thumbImgs[currentIndex].classList.add('is-active');
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > 3) {
        currentIndex = 0;
    }

    for (let j = 0; j < thumbImgs.length; j++) {
        thumbImgs[j].classList.remove('is-active');
    }

    let thumbSrc = thumbImgs[currentIndex].getAttribute('src');
    mainImg.setAttribute('src', thumbSrc);
    let text = thumbImgs[currentIndex].getAttribute('alt');
    captionText.textContent = `${currentIndex + 1} / 4 : ${text}`;
    thumbImgs[currentIndex].classList.add('is-active');
});
