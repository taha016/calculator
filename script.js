let firstNum;
let secondNum;
let operator1;

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const equal = document.querySelector('#equal');
const operatorBtn = document.querySelectorAll('.operator-btn');


function operate(operator, a, b) {
    if (operator === addition) {
        return addition(a, b);
    } else if (operator === subtraction) {
        return subtraction(a, b);
    } else if (operator === multiplication) {
        return multiplication(a, b);
    } else {
        return division(a, b);
    }
}



digits.forEach(digit => {
    digit.addEventListener('click', () => appendToDisplay(digit.textContent)); 
});

function appendToDisplay(input) {
    display.value += input;
    firstNum = display.value;
}

operatorBtn.forEach(operators => {
  operators.addEventListener('click', () => 
    display.value = ''
)
})

function addition (a, b) {
  return a + b;
}

function subtraction (a, b) {
  return a - b;
}

function multiplication (a, b) {
  return a * b;
}

function division (a, b) {
  if(b === 0) return "ERROR"
  else
    return a / b;
}
