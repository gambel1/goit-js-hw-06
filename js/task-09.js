function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
console.log(bodyEl);

const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);

const bcgEl = document.querySelector('.color');
console.log(bcgEl);

const buttonClickHandler = () => {
  let currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  bcgEl.textContent = currentColor;
};

buttonEl.addEventListener('click', buttonClickHandler);

// const numbers = [1, 3, 10, 15, 25].reduce((number, value) => {
//   return number + value;
// }, 0);
// console.log(numbers);


// const cars = ["bmv", "vw", "volvo", "shkoda"];
// const carsEl = cars.map(car => cars);
// console.log(cars);




// const values = [5, 6, 242, 42, 5, 6, 5].reduce((initialValue, numbers) => {
//   return initialValue + numbers;
// }, 0);
// console.log(values);

// const cityes = ["Kiev", "Kharkos", "DNR", "LNR", "Lvov", "Krakov"];
// cityes.map(city => city);
// console.log(cityes);