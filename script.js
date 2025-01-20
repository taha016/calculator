let firstNum 
let secondNum 
let operator1 = ''
let num

const display = document.querySelector('.display') 
const backSpace = document.querySelector('.backspace') 
const digits = document.querySelectorAll('.digits') 
const equal = document.querySelector('#equal') 
const operatorBtn = document.querySelectorAll('.operator-btn') 
const clear = document.querySelector('.clear') 


function operate(operator, a, b) {
    if (operator == '+') {
        return addition(a, b) 
    } else if (operator == '-') {
        return subtraction(a, b) 
    } else if (operator == 'x') {
        return multiplication(a, b) 
    } else {
        return division(a, b) 
    }
}

digits.forEach(digit => {
    digit.addEventListener('click', () => appendToDisplay(digit.textContent)
  )
}) 

equal.addEventListener('click', () => {
  display.value = operate(operator1, firstNum, secondNum) 
})

operatorBtn.forEach(operators => {
  operators.addEventListener('click', (e) => {
    operator1 = e.target.textContent
    display.value = '' 
  })
})

backSpace.addEventListener('click', () => {
  display.value = display.value.slice(0, -1)
  num = display.value

  if(operator1 == '') {
    firstNum = parseFloat(num) || 0
  } else {
    secondNum = parseFloat(num) || 0
  }
})

clear.addEventListener('click', () => {
  clearDisplay()
}) 

function appendToDisplay(input) {
  display.value += input
  num = display.value
  parseInt(num)
  if(operator1 == '') {
    firstNum = parseFloat(num)
  } else {
    secondNum = parseFloat(num)
  }
}

function addition (a, b) {
  return a + b 
}

function subtraction (a, b) {
  return a - b 
}

function multiplication (a, b) {
  return a * b 
}

function division (a, b) {
  if(b === 0) return "ERROR"
  else
    return a / b 
}

function clearDisplay() {
  display.value = ''
  firstNum = 0
  secondNum = 0
  operator1 = ''
}