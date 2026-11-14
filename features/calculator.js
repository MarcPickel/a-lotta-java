function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function square(num1) {
  return num1 * num1;
}

function power(num1, num2) {
  return Math.pow(num1, num2);
}

function squareRoot(num1) {
  return Math.sqrt(num1);
}

//console.log(squareRoot(36));

function calculate(num) {
  let calculation = 0;

  if (operator === "+") {
    // add + to calculation
  }
  if (operator === "-") {
    // add - to calculation
  }
  if (operator === "*") {
    // add * to calculation
  }
  if (operator === "/") {
    // add / to calculation
  }
  // So on and so forth
}

// Add functions to the calculation variable as a mathematical problem

//let calculation = add(add(3, 2), add(5, 5));

let value = (3 + 3 * 3) / 3;

let calculation = value;

// !!! There must be a function to count the amount of entries or inputs the user enters which would then adjust where the numbers fall into the final calculation.
// For instance: If 2 inputs, the two fall nicely into the function of add, subtract, multiply, divide, etc. If 3, then 2 fall into a nested function as a parameter,
// then the 3rd number falls into the 2nd parameter.
// The pattern would be: if divisible by 2 (or even), then fill the nested functions. If not divisble by 2 (or odd), then fill the parameter

// Which number(s) and how many times? Which operator(s) and how many times?
// How to string it into which order?
// How to make a complex calculation: e.g. 3 + 3 * 10 - 2

function equals() {
  return calculation;
}

console.log(equals());
