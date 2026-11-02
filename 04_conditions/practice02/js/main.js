const link = document.getElementById('external-link');
const url = link.getAttribute('href');
console.log(url);

link.setAttribute('href', 'https://yahoo.co.jp');

const postBtn = document.getElementById('post-btn');
postBtn.removeAttribute('disabled');
if (postBtn.hasAttribute('disabled')) {
    console.log('有効化中');
}

const viewImg = document.getElementById('view-img');
const toggleImgBtn = document.getElementById('toggle-img-btn');
const DAY_IMG = 'https://picsum.photos/id/1015/500/300';
const NIGHT_IMG = 'https://picsum.photos/id/1040/500/300';

toggleImgBtn.addEventListener('click', () => {
    const currentSrc = viewImg.getAttribute('src');
    if (currentSrc === DAY_IMG) {
        viewImg.setAttribute('src', NIGHT_IMG);
        viewImg.getAttribute('alt', `夜の画像`);
    } else {
        viewImg.setAttribute('src', DAY_IMG);
        viewImg.getAttribute('alt', `昼の画像`);
    }
})

const switchSiteBtn = document.getElementById('switch-site-btn');

switchSiteBtn.addEventListener('click', () => {
    link.setAttribute('href', 'https://computer.trident.ac.jp/');
    link.textContent = 'トライデント公式サイトを開く（同じタブ）';
    link.removeAttribute('target');
    switchSiteBtn.textContent = '切り替え完了！';
    switchSiteBtn.setAttribute('disabled', 'true');
})

const passwordInput = document.getElementById('password-input');
const togglePasswordBtn = document.getElementById('toggle-password-btn');

togglePasswordBtn.addEventListener('click', () => {
    const currentType = passwordInput.getAttribute('type');

    if (currentType === 'password') {
        passwordInput.setAttribute('type', 'text');
        togglePasswordBtn.textContent = '非表示';
        togglePasswordBtn.classList.add('is-active');
    } else {
        passwordInput.setAttribute('type', 'password');
        togglePasswordBtn.textContent = '表示';
        togglePasswordBtn.classList.remove('is-active');
    }
})


const commentInput = document.getElementById('comment-input');
const charCount = document.getElementById('char-count');
const warningText = document.getElementById('warning-text');

postBtn.setAttribute('disabled', 'true');

commentInput.addEventListener('input', () => {
    let value = commentInput.value.length;
    console.log(`現在の入力文字数: ${value}文字`);
    charCount.textContent = value;

    if (value === 0) {
        postBtn.setAttribute('disabled', 'true');
        warningText.textContent = '';
        commentInput.classList.remove('is-error');
        warningText.classList.remove('is-error');
    } else if (value > 15) {
        warningText.textContent = '文字数オーバーです';
        commentInput.classList.add('is-error');
        commentInput.classList.add('is-error');
    } else {
        warningText.textContent = '';
        commentInput.classList.remove('is-error');
        warningText.classList.remove('is-error');
    }
});
