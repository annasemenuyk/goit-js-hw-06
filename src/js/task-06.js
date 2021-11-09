// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
let nameInput = document.querySelector ('#validation-input');//доступ до поля введення
let inValidInputLenght = nameInput.getAttribute("data-length");//максимальне число введення
let inputLength = nameInput.getAttribute(nameInput.value.length);// довжина значення
/* console.log(inValidInputLenght)
console.log(inputLength) */
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

//ф-ція яка перевіряє к-сть символів введених в поле
nameInput.addEventListener('blur', el => {
//валідна кількість =6
  if (el.target.value.length == inValidInputLenght){
    nameInput.classList.add('valid');
    nameInput.classList.remove("invalid")
    //console.log( nameInput.classList)
  } 
  //не валідна кількість 
    else {  
    if (el.target.value.length !== inValidInputLenght && el.target.value.length !== 0){ 
    nameInput.classList.remove('valid');
    nameInput.classList.add("invalid")
    //console.log( nameInput.classList)
    }
    // не введені данні без класу
      else{
    nameInput.classList.remove('valid');
    nameInput.classList.remove('invalid')
    }
  };
})  