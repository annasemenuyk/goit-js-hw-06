const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
const ingredientsEl = document.querySelector('#ingredients');
// Добавит название ингредиента как его текстовое содержимое.
const ingredientEl = ingredients.map(ingredients=>{
  const liElem = document.createElement('li');
  liElem.textContent = [ingredients]
 return liElem;
});
console.log(ingredientsEl);
// Добавит элементу класс item.
ingredientsEl.classList.add('.item');
// После чего вставит все <li> за одну операцию в список ul.ingredients.
ingredientsEl.append(...ingredientEl);
