const simpleCalculator = document.getElementById("simple-calculator");
let display1 = simpleCalculator.querySelector("#display1");

const clearButton = simpleCalculator.querySelector("#clear-button");
const equalsButton = simpleCalculator.querySelector("#equals-button");

// Simple Calculator Functions

const appendToDisplay = (e) => {
  if (e.target.value === "=") {
    return null;
  }

  display1.value += e.target.value;
};

const handleClear = () => {
  display1.value = "";
};

const calculate = () => {
  display1.value = eval(display1.value);
  return +display1.value;
};

simpleCalculator.addEventListener("click", appendToDisplay);
clearButton.addEventListener("click", handleClear);
equalsButton.addEventListener("click", calculate);

// Advanced Calculator Functions

const advancedCalculator = document.getElementById("advanced-calculator");
let display2 = advancedCalculator.querySelector("#display2");

const acButton = advancedCalculator.querySelector("#ac-button");
const deButton = advancedCalculator.querySelector("#de-button");
const eqButton = advancedCalculator.querySelector("#eq-button");

const append = (e) => {
  if (e.target.value === "=") {
    return null;
  }
  if (e.target.value === "AC") {
    return null;
  }
  if (e.target.value === "DE") {
    return null;
  }

  display2.value += e.target.value;
};

const allClear = () => {
  display2.value = "";
};

const del = () => {
  display2.value = display2.value.toString().slice(0, -1);
};

const calc = () => {
  display2.value = eval(display2.value);
  return +display2.value;
};

advancedCalculator.addEventListener("click", append);
acButton.addEventListener("click", allClear);
deButton.addEventListener("click", del);
eqButton.addEventListener("click", calc);
