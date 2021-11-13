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
const form = document.querySelector('.login-form');
// const classes = (classes) => document.querySelector(classes);
// console.log (classes);
// console.log (`formSub`,formSub);
// formSub.addEventListener('submit',(event)=>{
//     event.preventDefault();// При отправке формы страница не должна перезагружаться.
//     console.log(`event`, event.target.elements);
//     const [email,password] = event.target.elements;
//     console.log (`email`, email.value);
//     console.log (`password`, password.value)
//     response.email = email.value;
//     response.password =password.value;
//     console.log (`response`, response);
//     if (email.value === "" || password.value === ""){
//       return  alert('все поля должны быть заполнены')};
//       console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
    // console.log(`event.target`, event.target);
    // const formData = new FormData(event.target);
    // const response = {};
    // formData.forEach ((value, name) =>{
    //     console.log (`${name}: ${value}`);
    //     response[name]=value;
    //     console.log (`response`, response);
    // });});
     form.addEventListener("submit", handleSubmit);
    
    function handleSubmit(event) {
      event.preventDefault();
      const {
        elements: { login, password }
      } = event.currentTarget;
    
      if (login.value === "" || password.value === "") {
        return alert("Please fill in all the fields! Все поля должны быть заполнены");
      }
    
      console.log(`Login: ${login.value}, Password: ${password.value}`);
      event.currentTarget.reset();
    }
    
// Обработка отправки формы form.login-form должна быть по событию submit.



// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.



// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
