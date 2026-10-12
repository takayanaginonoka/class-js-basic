// console.log('success!');

// id専用
// const mainTitle = document.getElementById('main-title');
// htmlのタグを見たいとき
// console.log(mainTitle);

// すべての形式で適用可能（cssのときの記述方法）
// もし同じ要素があった場合、最初（一つ目）の要素しか取得しない
// const title = document.querySelector('#main-title');
// その要素が持っている「詳しい情報や設定値の一覧」を確認したいとき
// console.dir(title);


// console.log(document.body);
// console.log(document.documentElement);

// const introText = document.getElementById('intro');
// console.log(introText);

// const changeBtn = document.querySelector('#change-btn');
// console.dir(changeBtn);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle.textContent);

// const day = 12;
// const week = '月曜日';
// mainTitle.textContent = `今日は${day}日の${week}です`;

// console.log(mainTitle.innerHTML);

// const introText = document.querySelector('#intro');
// // innerHTML
// introText.innerHTML = `ようこそ！<strong>JS</strong>の世界へ！`

// console.log(document.body.textContent);
// console.log(document.body.innerHTML);
// // textContent 単純にテキストの内容を変更したいとき
// introText.textContent = `ようこそ！<strong>JS</strong>の世界へ！`;

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = '髙栁';

// const introText = document.getElementById('intro');
// introText.innerHTML = `途中で<br>改行がある文章。`;

// const changeBtn = document.getElementById('change-btn');
// changeBtn.innerHTML = `<strong>内容を変更する</stront>`;

// mainTitle.style.color = '#de8fec';
// mainTitle.style.backgroundColor = '#abe9f1';

// let newSize = 50;
// // 単位（pxなど）が必要なものは文字列で記述する
// mainTitle.style.fontSize - `${newSize}px`;


// changeBtn.addEventListener('click', () => {
//     introText.style.backgroundColor = '#ffd9fb';
//     introText.style.border = '1px dotted #000';
//     introText.style.padding = '1rem';
// })


// ----- 課題 -----

const body = document.getElementById('body');
const themeTitle = document.getElementById('theme-title');
const themeDesc = document.getElementById('theme-desc');
const lightBtn = document.getElementById('btn-light');
const darkBtn = document.getElementById('btn-dark');
const popBtn = document.getElementById('btn-pop');

// 初期値
themeTitle.textContent = '今のテーマ：☀️ ライトモード';
body.style.backgroundColor = '#ecfbff';
themeTitle.style.color = '#474747';
themeDesc.style.color = '#474747';

// ライトモード
lightBtn.addEventListener('click', () => {
    themeTitle.textContent = '今のテーマ：☀️ ライトモード';
    body.style.backgroundColor = '#ecfbff';
    themeTitle.style.color = '#474747';
    themeDesc.style.color = '#474747';
})

// ダークモード
darkBtn.addEventListener('click', () => {
    themeTitle.textContent = '今のテーマ：🌙 ダークモード';
    body.style.backgroundColor = '#474747';
    themeTitle.style.color = '#fff';
    themeDesc.style.color = '#fff';
})

// ポップモード
popBtn.addEventListener('click', () => {
    themeTitle.textContent = '今のテーマ：💕 ポップモード';
    body.style.backgroundColor = '#fad2f8';
    themeTitle.style.color = '#17becd';
    themeDesc.style.color = '#17becd';
})
