let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  
  currentInput = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
        break;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
