// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
const backgroundSpanElem = document.querySelector ('.color');
const btnElem = document.querySelector ('.change-color');
const backgroundBodyElem = document.querySelector ('body');
const colorBody = getRandomHexColor()
btnElem.addEventListener ( `click`, cangeBackgroundColor);
function cangeBackgroundColor () {
  backgroundBodyElem.style.backgroundColor = colorBody;
  backgroundSpanElem.textContent = colorBody;
// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
}