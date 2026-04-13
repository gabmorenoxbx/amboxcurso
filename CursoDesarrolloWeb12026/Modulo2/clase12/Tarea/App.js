// function calcularAreaRectangulo
function calcularAreaRectangulo(base, altura) {
    return base * altura
}
console.log(calcularAreaRectangulo(2, 5))

//Function mayor de edad devuelva booleano 
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    }
    else {
        return false
    }
}
console.log(esMayorDeEdad(15))

//Variable Global pais y local ciudad dentro de function

let pais = 'Argentina' // Var Global

function mostrarUbicacion() {
    let ciudad = 'Tucuman'; // Var Local
    console.log(`Pais: ${pais}, Ciudad: ${ciudad}`)
}
mostrarUbicacion()

//Crear una function que repita texto, la cantidad de veces que se le mande por props,  ejemplo: repetirTexto("Hola", 3) esto deberia repetirse 3 veces

function repetirTexto(texto, veces) {
    for (let i = 0; i < veces; i++) {
    console.log(texto);    
    }
}
repetirTexto('Hola', 3)

//Crear función repetirTexto(texto, veces) → mostrar el texto repetido la cantidad de veces indicada

function repetirTexto2(texto, veces) {
    let acumulador = ''; //scope local para guardar el resultado
    for (let i = 0; i < veces; i++) {
        acumulador = acumulador + texto + ' ';
    }
    console.log(acumulador)
}
repetirTexto2('Buenas', 5)