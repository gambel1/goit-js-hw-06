const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:", itemEl.length);

const categoriesArray = [...itemEl].map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);





