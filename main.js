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

// en esta funcion se debe poner un expresión regular para validar si
// hay numeros en los input

// funcion para validar campos
function validateFields() {
    // explicacion de esta condicion debajo de la ultima linea de codigo.
    if ($inputUserA.value === "" && $inputUserB.value === "") {
        console.log("Debe colocar al menos un numero en uno")
        $result.textContent = "Debe colocar al menos un numero en uno"
        return 0
    } else {
        return 1
    }

}


// funcion para sumar valores
function add() {
    const validateAdd = validateFields()
    if (validateAdd === 0) {
        return
    } else if (validateAdd === 1) {
        const aAdd = Number($inputUserA.value)
        const bAdd = Number($inputUserB.value)
        const resultAdd = aAdd + bAdd
        console.log(resultAdd)
        $result.textContent = resultAdd
    }
}

// funcion para restar valores
function take() {
    const validateTake = validateFields()
    if (validateTake === 0) {
        return
    } else if (validateTake === 1) {
        const aTake = Number($inputUserA.value)
        const bTake = Number($inputUserB.value)
        const resultTake = aTake - bTake
        console.log(resultTake)
        $result.textContent = resultTake
    }
}

// funcion para multiplicar valores
function multiply() {
    const validateMultiply = validateFields()
    if (validateMultiply === 0) {
        return
    } else if (validateMultiply === 1) {
        const aMultiply = Number($inputUserA.value)
        const bMultiply = Number($inputUserB.value)
        const resultMultiply = aMultiply * bMultiply
        console.log(resultMultiply)
        $result.textContent = resultMultiply
    }
}

// funcion para dividir valores
function divide() {
    const validateDivide = validateFields()
    if (validateDivide === 0) {
        return
    } else if (validateDivide === 1) {
        const aDivide = Number($inputUserA.value)
        const bDivide = Number($inputUserB.value)
        const resultDivide = aDivide / bDivide
        console.log(resultDivide)
        $result.textContent = resultDivide
    }
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



/*

                #####################
                    explicaciones
                #####################


function validateFields() {
    if ($inputUserA.value === "" && $inputUserB.value === "") {
    }
}

para entrar en el if las dos condiciones tiene que dar true.

si una de las dos condiciones da false y la otra true, la
condicion en su totalidad se torna false como resultado y
no se entra en el if.


condicion1: $inputUserA.value === ""
    si el valor de $inputUserA es estrictamente igual a un string vacio

&&  esto significa "y"

condicion2: $inputUserB.value === ""
    si el valor de $inputUserB es estrictamente igual a un string vacio

$inputUserA y $inputUserA de por si tiene tipo de dato string.
por eso es necesario convertirlos a Number para hacer operaciones aritméticas.#


SACADO DE INTERNET:

Igualdad estricta (===):
Este operador es el más seguro para comparar, ya que evita confusiones
causadas por conversiones automáticas de tipos. Si los tipos no coinciden,
la comparación termina inmediatamente con false.

Igualdad (==):
Este operador realiza una conversión de tipos antes de comparar los valores.
Por ejemplo, si comparas un número con una cadena, JavaScript intentará
convertir la cadena a un número o viceversa antes de hacer la comparación.
Esto puede llevar a resultados inesperados si no se tiene cuidado.

////////////////////////////////////////////////////////////////////////////////////

function add() {
    validateFields()
    if (validateFields() === 0) {
        return
    } else if (validateFields() === 1) {
        const aAdd = Number($inputUserA.value)
        const bAdd = Number($inputUserB.value)
        const resultAdd = aAdd + bAdd
        console.log(resultAdd)
        $result.textContent = resultAdd
    }
}

    validateFields()
    if (validateFields() === 0)
        si lo dejo así, se imprime dos veces la siguiente linea:

    console.log("Debe colocar al menos un numero en uno")

    porque estaria llamado mas de una vez a la funcion.

    por esto se hago lo siguiente:

    function add() {
    let validateAdd = validateFields()
    if (validateAdd === 0) {
        return
    } else if (validateAdd === 1) {

/////////////////////////////////////////////////////////////////////////////////

    NO SE DETIENE LA EJECUCION DEL CODIGO CUANDO COLOCO UN return 
    SOLO (SIN VALOR) EN LA FUNCION validateFields(). Y SE EJECUTABA UNA
    DE LAS FUNCIONES DE OPERACIONES ARITMETICAS.
    POR ESO COLOQUE EL return EN CADA FUNCION DE OPERACIONES ARITMETICAS.

    // funcion para validar campos
function validateFields() {
    // explicacion de esta condicion debajo de la ultima linea de codigo.
    if ($inputUserA.value === "" && $inputUserB.value === "") {
        console.log("Debe colocar al menos un numero en uno")
        $result.textContent = "Debe colocar al menos un numero en uno"
        return 0
    } else {
        return 1
    }

}


// funcion para sumar valores
function add() {
    const validateAdd = validateFields()
    if (validateAdd === 0) {
        return
    } else if (validateAdd === 1) {
        const aAdd = Number($inputUserA.value)
        const bAdd = Number($inputUserB.value)
        const resultAdd = aAdd + bAdd
        console.log(resultAdd)
        $result.textContent = resultAdd
    }
}

/////////////////////////////////////////////////////////////////////////////



*/