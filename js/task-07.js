const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const handleInput = () => {
textSpan.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('input', handleInput);


