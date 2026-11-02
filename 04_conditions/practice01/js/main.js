console.log('04_conditions ready!');

const score = `80`;
if (score === 80) {
    console.log(`合格`);
} else if (score >= 50) {
    console.log(`もう少し`);
} else {
    console.log(`不合格`);
}

const age = 16;
const hasLicense = true;

// hasLicense === true　という書き方じゃなくても下記のように記述するだけで真偽判定できる
// hasLicense 真
// ！hasLicense 偽
if (age >= 18 || hasLicense) {
    console.log(`運転できる`);
} else {
    console.log(`運転できない`);
}

const message = document.getElementById('message');
const btn = document.getElementById('btn');
const isMember = true; // 会員フラグ：true または false
const total = 6000; // 購入金額：数値


// btn.addEventListener('click', () => {
//     if (isMember && total >= 10000) {
//         message.textContent = '【送料無料＋20%OFF】プレミアム会員特典が適用されました！';
//         message.style.color = '#0066cc';
//     } else if (isMember && total >= 5000) {
//         message.textContent = '【送料無料】会員特別割引が適用されました！';
//         message.style.color = '#27ae60';
//     } else {
//         message.textContent = '通常送料がかかります（会員登録＋5,000円以上で送料無料）。';
//         message.style.color = '#e74c3c';
//     }
// })

const countText = document.getElementById('count');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    countText.textContent = count;
    countText.style.fontSize = `${count}px`;

    if (count >= 30) {
        message.textContent = '30回達成！ゲームクリアです！';
        message.style.color = '#e74c3c';
        // count % 10 === 0 という書き方が一番美しい
    } else if (count === 10 || count === 20) {
        message.textContent = `${count}回達成！あと少し！`;
        message.style.color = '#0066cc';
    } else {
        message.textContent = 'ボタンをクリックしてカウントを増やそう！';
        message.style.color = '#333333';
    }

})

const pageTop = document.getElementById('page-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        pageTop.classList.add('is-active');
    }
})

pageTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // スムーズにスクロールさせる
    });
})
