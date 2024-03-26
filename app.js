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

