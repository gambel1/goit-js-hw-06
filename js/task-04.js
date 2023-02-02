// const buttonListEl = document.querySelector('#counter')
// console.log(buttonListEl);
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtnEl);

// decrementBtnEl.addEventListener('click', () => {
//     console.log('клик');
// });
    
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector('#value');
let counterValue = 0;

const decrementButtonEl = () => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
};

const incrementButtonEl = () => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}

const buttonDecrementListEl = decrementBtnEl[0];
const buttonIncrementListEl = incrementBtnEl[1];
decrementBtnEl.addEventListener('click', decrementButtonEl);
incrementBtnEl.addEventListener('click', incrementButtonEl);


