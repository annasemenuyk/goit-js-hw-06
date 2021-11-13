
//  Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.
 const create = document.querySelector('[data-create = "Create"]');
 const destroy = document.querySelector('[data-destroy = "Destroy"]');
 const boxes = document.getElementById("boxes");
create.addEventListener (`click`, getAmount);
destroy.addEventListener (`click`, destroyBoxes);
console.log(`click`,create)
function getAmount() {
const amount = +document.getElementById("controls").value;
createBoxes(amount);
}
// Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.
function createBoxes(amount) {
// Размеры самого первого div - 30px на 30px
  const basicSize = 30;
  let fragment = document.createDocumentFragment();
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
for (let i = 0; i < amount; i++) {
  let size = basicSize + i + 10;
  let div = document.createElement('div');
  div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
  fragment.appendChild(div);
};
// Создай функцию destroyBoxes(), которая очищает div#boxes.
boxes.appendChild(fragment);
}
//  При нажатии на кнопку Очистить, коллекция элементов очищается.
function destroyBoxes() {
  boxes.innerHTML = "";
}
// Каждый созданный div:
// Имеет случайный rgb цвет фона
function random() {
return Math.floor(Math.random() * 256);
}

