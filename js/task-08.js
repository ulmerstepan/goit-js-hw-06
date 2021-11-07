// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//     где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа 
//     к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');
const emailEl = document.querySelector("[type=email]");
const passwordEl = document.querySelector("[type=password]");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (emailEl.value === "" || passwordEl.value === "") {
        return alert("Enter all data!!!");
    }

    const user = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }

    console.log(user);

    event.currentTarget.reset();
}
