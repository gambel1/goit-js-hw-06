const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');


const createItem = (text) => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = text;
  return ingredientItemEl;
}

const insertItems = (array) => {
  ingredientsListEl.append(...array.map((element) => createItem(element)));
}

insertItems(ingredients)

// const itemPotatoesEl = document.createElement('li');
// itemPotatoesEl.classList.add('item');
// itemPotatoesEl.textContent = 'Potatoes';
// console.log(itemPotatoesEl);

// const itemMushroomsEl = document.createElement('li');
// itemMushroomsEl.classList.add('item');
// itemMushroomsEl.textContent = 'Mushrooms';
// console.log(itemMushroomsEl);

// const itemGarlicEl = document.createElement('li');
// itemGarlicEl.classList.add('item');
// itemGarlicEl.textContent = 'Garlic';
// console.log(itemGarlicEl);

// const itemTomatosEl = document.createElement('li');
// itemTomatosEl.classList.add('item');
// itemTomatosEl.textContent = 'Tomatos';
// console.log(itemTomatosEl);

// const itemHerbsEl = document.createElement('li');
// itemHerbsEl.classList.add('item');
// itemHerbsEl.textContent = 'Herbs';
// console.log(itemHerbsEl);

// const itemCondimentsEl = document.createElement('li');
// itemCondimentsEl.classList.add('item');
// itemCondimentsEl.textContent = 'Condiments';
// console.log(itemCondimentsEl);

// navEl.append(itemPotatoesEl, itemMushroomsEl, itemGarlicEl,
//   itemTomatosEl, itemHerbsEl, itemCondimentsEl);
// console.log(navEl);





