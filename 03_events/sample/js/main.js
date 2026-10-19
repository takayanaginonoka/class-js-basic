const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('mouseout', () => {
    mainTitle.textContent = 'クリックされました'
    mainTitle.style.color = '#ff4646';
});

window.addEventListener('scroll', () => {
    // スクロール量を取得
    console.log(`現在のスクロール量: ${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    // スクロールされたピクセル数（px）をそのままグラデーションの角度（deg）に変換
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

// window.addEventLIstener('DOMContentLoaded',() => {})
// DOMツリーが完成したら実行する（ブラウザにはまだ表示されていない）







// load = ページがすべて読み込まれてから実行する
window.addEventListener('load', () => {
    console.log(`現在のスクロール量: ${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    // スクロールされたピクセル数（px）をそのままグラデーションの角度（deg）に変換
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;

})

window.addEventListener('resize', () => {
    console.log(`現在のブラウザ幅: ${window.innerWidth}px`);
});

const windowWidth = document.getElementById('window-width');
const windowHeight = document.getElementById('window-height');

mainTitle.style.fontSize = `${window.innerWidth / 25}px`;

window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;

    mainTitle.style.fontSize = `${window.innerWidth / 25}px`;
})

// クラスを追加
btn.classList.add('is-active', 'isi-open');
// btn.classList.toggle('is-active', ture); 上記と同じ意味
// クラスを削除
btn.classList.remove('is-active');
// btn.classList.toggle('is-active', false); 上記と同じ意味


btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    if (btn.classList.contains('is-active')) {
        btn.textContent = 'アクティブ';
    } else {
        btn.textContent = '通常';
    }
})
