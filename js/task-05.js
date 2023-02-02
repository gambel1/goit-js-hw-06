// const refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// }

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     refs.output.textContent = event.currentTarget.value
        
// };

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handleTargetInput = (event) => {
    outputEl.textContent =
        event.currentTarget.value
        ? event.currentTarget.value
        : 'Anonymous'
};

inputEl.addEventListener('input', handleTargetInput);



