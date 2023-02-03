function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createButtonEl = document.querySelector('[data-create]');
const destroyRemoveButtonEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = ((amount) => {
  const numberBox = [];

  amount = Number(inputEl.value);
  numberBox.length = amount;
  numberBox.fill("");

  numberBox.map((element, index) => {
    numberBox.forEach((el) => {
      element = document.createElement('div');
      element.style.width = 30 + index * 10 + "px";
      element.style.height = 30 + index * 10 + "px";
      element.style.backgroundColor = getRandomHexColor();
 });
      numberBox.push(element);
});
  return boxesEl.append(...numberBox);
   
});

const destroyBoxes = ((event) => {
  boxesEl.innerHTML = '';
  inputEl.innerHTML = '';
});

createButtonEl.addEventListener('click', createBoxes);
destroyRemoveButtonEl.addEventListener('click', createBoxes);



