const allCat = document.querySelector("#categories");
const numCat = allCat.querySelectorAll(".item");
console.log("Number of categories:", numCat.length);

const parentItems = allCat.querySelectorAll(".item");

parentItems.forEach(function (parentItems) {
  const firstChild = parentItems.firstElementChild.textContent;
  const secondChild = parentItems.lastElementChild;
  const numSecondChilds = secondChild.querySelectorAll("li");

  console.log("Category:", firstChild);
  console.log("Elements:", numSecondChilds.length);
});
