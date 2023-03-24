// 1.Отримати кнопку "Change color" з допомогою методу querySelector та зберегти її в змінну.
// 2.Додати обробник події click на кнопку "Change color".
// 3.Отримати елемент span з класом "color" з допомогою методу querySelector та зберегти його в змінну.
// 4.Отримати елемент body з допомогою методу querySelector та зберегти його в змінну.
// 5.В обробнику події click для кнопки "Change color" згенерувати випадковий колір з використанням функції getRandomHexColor.
// 6.Застосувати згенерований колір як стиль фону елементу body з використанням властивості style.
// 7.Оновити текст елементу span з класом "color" згідно з новим випадковим кольором.



const button = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const body = document.querySelector('body');

button.addEventListener('click', () => {
const randomColor = getRandomHexColor();
body.style.backgroundColor = randomColor;
colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, '0')}`;
}