function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", boxesToCreate);
buttonDestroy.addEventListener("click", destroyBoxes);
function boxesToCreate() {
  let amount = document.querySelector("input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let boxStartSize = 30;
  var fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    let boxSize = boxStartSize + i * 10;
    let newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(newBox);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
