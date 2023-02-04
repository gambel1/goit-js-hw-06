const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener ('blur', event => {
    inputEl.classList.remove("valid", "invalid");

    const inputColorEl = (inputEl.value.length === Number(inputEl.dataset.length)/*6*/)
           ? inputEl.classList.add("valid")
        : inputEl.classList.add("invalid");
    });


