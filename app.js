const screen = document.querySelector('.screen')
const clearBtn = document.getElementById('clear-btn')
const signBtn = document.getElementById('sign-btn')
const percentageBtn = document.getElementById('percentage-btn')
const equalsBtn = document.getElementById('equal-btn')
const dotBtn = document.getElementById('point-btn')
const operatorButtons = document.querySelectorAll('.sign')
const numberButtons = document.querySelectorAll('.number')

let firstOperand = ''
let secondOperand = ''
let currentOperation = null

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