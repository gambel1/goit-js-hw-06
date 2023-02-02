const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    inputs.forEach(input => {
    if (input.value.trim() === '') {
        alert("Заполните все поля!")
    }
});
    console.log('страница теперь не перезагружается');

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
})


form.reset();
};












































// formData.forEach((value, name) => {
//     console.log(`name`, name );
//     console.log(`value`, value);
//   });