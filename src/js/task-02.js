const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const newListEl = ingredients.map((elem) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = elem;

  return newEl;
});

ingredientsList.append(...newListEl);
