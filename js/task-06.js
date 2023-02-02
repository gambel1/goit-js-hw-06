const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener ('blur', onInputBlur => {
if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid");
        return inputEl.classList.add("valid");
    }
    return inputEl.classList.add("invalid");
});
