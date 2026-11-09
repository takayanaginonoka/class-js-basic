// [] : 角かっこ,ブラケット
const fruits = ['りんご', 'ばなな', 'みかん'];
fruits[3] = 'いちご'
fruits.push('ぶどう');
console.log(fruits);

// 変数の値自体を変更するとエラー
// fruits = ['いちご'];

const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];

const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');
const stepIndicator = document.getElementById('step-indicator');

let currentIndex = 0;
stepMessage.textContent = steps[currentIndex];

nextBtn.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }

    stepMessage.textContent = steps[currentIndex];
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
})

const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    const newStepText = newStepInput.value;

    // 別の条件: newStepInput.value.length > 0
    if (newStepText !== '') {
        steps.push(newStepText);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
        newStepInput.value = '';
    }
});

const removeBtn = document.getElementById('remove-btn');

removeBtn.addEventListener('click', () => {
    steps.pop();
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});

for (let i = 0; i < 5; i++) {
    console.log(`${i}回目の処理`);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let total = 0;
for (let i = 1; i <= 10; i++) {
    total = total + i;
}
console.log(total);

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}番目の値：${fruits[i]}`);
}

const menuList = document.getElementById('menu-list');

const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];

let text = '';
for (let i = 0; i < menus.length; i++) {
    text += `<li>${menus[i]}</li>`;
    console.log(text);
}

menuList.innerHTML = text;
