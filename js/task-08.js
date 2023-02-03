const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            alert("Заполните все поля!")
        }
        
        const formElements = event.currentTarget.elements;
        
        const mail = formElements.email.value;
        const password = formElements.password.value;
        
        console.log(mail, password);
});
   
//     const formData = new FormData(event.currentTarget);
//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value);
// })

form.reset();
};












































