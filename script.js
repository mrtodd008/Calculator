let currentInput = "0";
let previousInput = "";
let operator = null;
let isResult = false;

// Update the display with the current input
function updateDisplay() {
  document.getElementById("display").textContent = currentInput;
}

// Handle number input
function handleNumber(number) {
  if (isResult) {
    currentInput = String(number);
    isResult = false;
  } else {
    if (currentInput === "0") {
      currentInput = String(number);
    } else {
      currentInput += String(number);
    }
  }
  updateDisplay();
}

// Handle operator input
function handleOperator(op) {
  if (operator && currentInput) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

// Perform the calculation
function calculate() {
  if (previousInput && operator && currentInput) {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        if (current === 0) {
          clear();
          alert("Cannot divide by zero");
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }
    currentInput = result.toString();
    previousInput = "";
    operator = null;
    isResult = true;
    updateDisplay();
  }
}

// Handle the equals button
function handleResult() {
  calculate();
}

// Handle the clear button
function handleClear() {
  currentInput = "0";
  previousInput = "";
  operator = null;
  isResult = false;
  updateDisplay();
}
