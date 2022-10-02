const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

function inputChange(event) {
  let inputDataRef = event.currentTarget.value;
  spanRef.style.fontSize = `${inputDataRef}px`;
}

inputRef.addEventListener("input", inputChange);
