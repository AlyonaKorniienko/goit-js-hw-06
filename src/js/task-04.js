let counterValue = 0;
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const counterText = document.querySelector("span");

const decrementFn = function (event) {
  counterValue = counterValue - 1;
  counterText.textContent = counterValue;
};

const incrementFn = (event) => {
  counterValue += 1;
  counterText.textContent = counterValue;
};

buttonDec.addEventListener("click", decrementFn);
buttonInc.addEventListener("click", incrementFn);
