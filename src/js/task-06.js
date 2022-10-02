const inputRef = document.querySelector("#validation-input");
const validInputLength = inputRef.getAttribute("data-length");

function onInputChange(event) {
  let inputDataRef = event.currentTarget.value.length;
  console.log("Symbols entered:", inputDataRef);
  if (inputDataRef == validInputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

inputRef.addEventListener("blur", onInputChange);
