function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createButtonEl = document.querySelector('[data-create]');
const destroyRemoveButtonEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = ((amount) => {
  amount = inputEl.value;
  const numberBox = [];

  const boxEl = amount.reduce((initialValue, element) => {
    const newBoxEl = document.createElement('div');

    newBoxEl.style.width = 30 + element * 10 + "px";
    newBoxEl.style.height = 30 + element * 10 + "px";
    newBoxEl.style.backgroundColor = getRandomHexColor();

    numberBox.push(newBoxEl);

    boxesEl.append(...numberBox);

  }, 0);
});

const destroyBoxes = (event) => (boxesEl.innerHTML = '');

destroyRemoveButtonEl.addEventListener('click', destroyBoxes);


createButtonEl.addEventListener('click', createBoxes);
destroyRemoveButtonEl.addEventListener('click', createBoxes);


