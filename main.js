//                  elementos html

// campo que el usuario completara
const $inputUser = document.querySelector("#input-user")

//
const $buttonAdd = document.querySelector("#plus-add")

//
const $buttonTake = document.querySelector("#minus-take")

//
const $buttonMultiply = document.querySelector("#multiply-times")

//
const $buttonDivide = document.querySelector("#divide")

//
const $buttonEquals = document.querySelector("#equals")

function add(a, b) {
    const resultAdd = a + b
    return resultAdd
}

function take(a, b) {
    const resultTake = a - b
    return resultTake
}

function multiply(a, b) {
    const resultMultiply = a * b
    return resultMultiply
}

function divide(a, b) {
    const resultDivide = a / b
    return resultDivide
}
