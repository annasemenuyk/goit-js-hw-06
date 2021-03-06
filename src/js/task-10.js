
// /* Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, 
// должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes 
const refs = {
  create : document.querySelector('[data-create]'),
  destroy : document.querySelector('[data-destroy]'),
  boxes : document.getElementById('boxes'),
};
refs.create.addEventListener("click", getAmount);
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  function getAmount() {
    const amount = +document.getElementById("controls").value;
    createBoxes(amount);
    console.log(amount)
    }
  const basicSize = 30;
  let fragment = document.createDocumentFragment();
for (let i = 0; i < amount; i++) {
  let size = basicSize + i + 10;
  let div = document.createElement('div');
  div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()} , ${getRandomHexColor()} , ${getRandomHexColor()} )`;
  fragment.appendChild(div);
}

refs.boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }