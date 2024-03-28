const screen = document.querySelector('.screen')
const clearBtn = document.getElementById('clear-btn')
const signBtn = document.getElementById('sign-btn')
const percentageBtn = document.getElementById('percentage-btn')
const equalsBtn = document.getElementById('equal-btn')
const dotBtn = document.getElementById('dot-btn')
const operatorButtons = document.querySelectorAll('.sign')
const numberButtons = document.querySelectorAll('.number')

let firstOperand = ''
let secondOperand = ''
let currentOperation = null

clearBtn.addEventListener('click', clear)
dotBtn.addEventListener('click', appendDecimal)

operatorButtons.forEach(button => {
    button.addEventListener('click', () => console.log('im an operator'))
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
});

function appendNumber (number) {
    if (screen.textContent === '0') {
        resetScreen()
        screen.textContent = number
    }
    else {
        screen.textContent += number
    }
}

function appendDecimal () {
    if (screen.textContent.includes('.')) {
        return
    }
    screen.textContent += '.'
}

function resetScreen () {
    screen.textContent = ''
}

function clear () {
    screen.textContent = '0'
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function operate (a, b, operator) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}

function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}