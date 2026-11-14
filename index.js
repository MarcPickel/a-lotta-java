const calculator = document.getElementById("calculator");
let display = calculator.querySelector("#display");

const clearButton = calculator.querySelector("#clear");

const appendToDisplay = (e) => {
  return (display.value += e.target.value);
};

const handleClear = () => {
  return (display.textContent = display.dataset.defaultValue);
};

calculator.addEventListener("click", appendToDisplay);
