// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
const formSub = document.querySelector('.login-form');
const classes = (classes) => document.querySelector(classes);
console.log (classes);
console.log (`formSub`,formSub);
const response = {};
formSub.addEventListener('submit',(event)=>{
    event.preventDefault();// При отправке формы страница не должна перезагружаться.
    // console.log(`event`, event.target.elements);
    // const [email,password] = event.target.elements;
    // console.log (`email`, email.value);
    // console.log (`password`, password.value)
    // response.email = email.value;
    // response.password =password.value;
    // console.log (`response`, response);
    console.log(`event`, event.target);
    const formData = new FormData(event.target);
});

// Обработка отправки формы form.login-form должна быть по событию submit.



// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
if (Text.input === ""){
    alert:`все поля должны быть заполнены`
}

// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
