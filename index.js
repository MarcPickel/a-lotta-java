const calculator = document.getElementById("calculator");
let display = calculator.querySelector("#display");

const clearButton = calculator.querySelector("#clear-button");
const equalsButton = calculator.querySelector("#equals-button");

const appendToDisplay = (e) => {
  if (e.target.value === "=") {
    return null;
  }

  display.value += e.target.value;
};

const handleClear = () => {
  display.value = "";
};

const calculate = () => {
  display.value = eval(display.value);
  return +display.value;
};

calculator.addEventListener("click", appendToDisplay);
clearButton.addEventListener("click", handleClear);
equalsButton.addEventListener("click", calculate);
