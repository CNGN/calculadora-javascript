//                  declaracion de elementos html

// campo que el usuario completara. input
const $inputUserA = document.getElementById("input-user-a")

// campo que el usuario completara. input
const $inputUserB = document.getElementById("input-user-b")

// campo donde se imprimira el resultado. p
const $result = document.getElementById("result")

// boton sumar
const $buttonAdd = document.getElementById("plus-add")

// boton sumar
const $buttonTake = document.getElementById("minus-take")

// boton multiplicar
const $buttonMultiply = document.getElementById("multiply-times")

// boton dividir
const $buttonDivide = document.getElementById("divide")

// boton limpiar
const $buttonClear = document.getElementById("clear")


//              funciones

// funcion para limpiar input y parrafo
function clear() {
    // se limpia el primer campo de entrada
    $inputUserA.value = ""
    // se limpia el segundo campo de entrada
    $inputUserB.value = ""
    // se limpia el lugar en donde se muestra el resultado
    $result.innerHTML = ""
}

// funcion para sumar valores
function add() {
    const aAdd = Number($inputUserA.value)
    const bAdd = Number($inputUserB.value)
    const resultAdd = aAdd + bAdd
    console.log(resultAdd)
    $result.textContent = resultAdd
}

// funcion para restar valores
function take() {
    const aTake = Number($inputUserA.value)
    const bTake = Number($inputUserB.value)
    const resultTake = aTake - bTake
    console.log(resultTake)
    $result.textContent = resultTake
}

// funcion para multiplicar valores
function multiply() {
    const aMultiply = Number($inputUserA.value)
    const bMultiply = Number($inputUserB.value)
    const resultMultiply = aMultiply * bMultiply
    console.log(resultMultiply)
    $result.textContent = resultMultiply
}

// funcion para dividir valores
function divide() {
    const aDivide = Number($inputUserA.value)
    const bDivide = Number($inputUserB.value)
    const resultDivide = aDivide / bDivide
    console.log(resultDivide)
    $result.textContent = resultDivide
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
