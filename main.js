//                  elementos html

// campo que el usuario completara
const $inputUserA = document.querySelector("#input-user-a")

// campo que el usuario completara
const $inputUserB = document.querySelector("#input-user-b")

// campo que el usuario completara
const $result = document.querySelector("#result")

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

function add() {
    const a = parseInt($inputUserA.value)
    const b = parseInt($inputUserB.value)
    const resultAdd = a + b
    console.log(resultAdd)
    $result.textContent = resultAdd
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



//          botones
$buttonAdd.addEventListener("click", add)