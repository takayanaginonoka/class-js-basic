const attackBtn = document.getElementById('attack-btn');
const resetBtn = document.getElementById('reset-btn');
const hpText = document.getElementById('hp-display');
const battleMessage = document.getElementById('battle-message');
const enemyImg = document.getElementById('enemy-img');

const MAX_HP = 100;
const DAMAGE = 25;
let currentHp = MAX_HP;
const BEFORE_IMG = 'https://picsum.photos/id/1025/400/250';
const AFTER_IMG = 'https://picsum.photos/id/1062/400/250';

attackBtn.addEventListener('click', () => {
    currentHp = currentHp - DAMAGE;

    // ダメージ量が割り切れなくてもマイナスにしない処理
    if (currentHp < 0) {
        currentHp = 0;
    }

    hpText.textContent = `HP: ${currentHp} / 100`;
    enemyImg.classList.remove('is-damage');
    void enemyImg.offsetWidth;
    enemyImg.classList.add('is-damage');

    if (currentHp === 0) {
        battleMessage.textContent = 'モンスターをたおした！ゲームクリア！';
        hpText.style.color = '#e74c3c';
        enemyImg.setAttribute('src', AFTER_IMG);
        enemyImg.setAttribute('alt', '倒れたモンスター');
        attackBtn.setAttribute('disabled', 'true');
    } else if (currentHp <= 50) {
        battleMessage.textContent = '相手はふらふらだ！あと少し！';
        hpText.style.color = '#e67e22';
    } else {
        battleMessage.textContent = '効果的なダメージを与えた！';
        hpText.style.color = '#333333';
    }
})

resetBtn.addEventListener('click', () => {
    currentHp = MAX_HP;
    hpText.textContent = `HP: ${currentHp} / 100`;
    hpText.style.color = '#333333';
    battleMessage.textContent = '「こうげき」ボタンを押してダメージを与えよう！';
    enemyImg.setAttribute('src', BEFORE_IMG);
    enemyImg.setAttribute('alt', 'モンスター');
    attackBtn.removeAttribute('disabled', 'true');
})
