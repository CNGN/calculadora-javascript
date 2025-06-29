//                  elementos html

// campo que el usuario completara. input
const $inputUserA = document.querySelector("#input-user-a")

// campo que el usuario completara. input
const $inputUserB = document.querySelector("#input-user-b")

// campo donde se imprimira el resultado. p
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
const $buttonClear = document.querySelector("#clear")


//              funciones

// funcion para limpiar input y parrafo
function clear() {
    $inputUserA.value = ""
    $inputUserB.value = ""
    $result.value = ""
    return
}

// funcion para sumar valores
function add() {
    const aAdd = parseInt($inputUserA.value)
    const bAdd = parseInt($inputUserB.value)
    const resultAdd = aAdd + bAdd
    console.log(resultAdd)
    $result.textContent = resultAdd
    return
}

// funcion para restar valores
function take() {
    const aTake = parseInt($inputUserA.value)
    const bTake = parseInt($inputUserB.value)
    const resultTake = aTake - bTake
    console.log(resultTake)
    $result.textContent = resultTake
    return
}

// funcion para multiplicar valores
function multiply() {
    const aMultiply = parseInt($inputUserA.value)
    const bMultiply = parseInt($inputUserB.value)
    const resultMultiply = aMultiply * bMultiply
    console.log(resultMultiply)
    $result.textContent = resultMultiply
    return
}

// funcion para dividir valores
function divide() {
    const aDivide = parseInt($inputUserA.value)
    const bDivide = parseInt($inputUserB.value)
    const resultDivide = aDivide / bDivide
    console.log(resultDivide)
    $result.textContent = resultDivide
    return
}



//          botones

// boton sumar que espera el evento click y llama a function add
$buttonAdd.addEventListener("click", add)

// boton restar que espera el evento click y llama a function take
$buttonTake.addEventListener("click", take)

// boton multiplicar que espera el evento click y llama a function multiply
$buttonMultiply.addEventListener("click", multiply)

// boton dividir que espera el evento click y llama a function divide
$buttonDivide.addEventListener("click", divide)

// boton limpiar que espera el evento click y llama a function clear
$buttonClear.addEventListener("click", clear)
