let inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  const inputText = event.currentTarget.value;
  if (inputText == "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = inputText;
  }
});
