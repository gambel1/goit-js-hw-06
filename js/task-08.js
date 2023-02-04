const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (formElements.email.value === '' || formElements.password.value === '') {
        return alert('Заполните все поля!');
    }

    console.log(
        `Login: ${formElements.email.value}, Password: ${formElements.password.value}`,
    );
    form.reset();
});
