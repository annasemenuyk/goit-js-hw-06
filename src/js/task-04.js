// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
const spanVal = document.querySelector("#value");
let counterValue = 0;
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
const increment = () => (spanVal.textContent = counterValue += 1);
const decrement = () => (spanVal.textContent = counterValue -= 1);
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
// Обновляй интерфейс новым значением переменной counterValue.
