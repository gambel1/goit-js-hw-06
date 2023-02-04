const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (form.email.value === '' || form.password.value === '') {
        return alert('Заполните все поля!');
    }

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    // console.log(mail, password);
    console.log(`Login: ${form.email.value}, Password: ${form.password.value}`);
    form.reset();
});




