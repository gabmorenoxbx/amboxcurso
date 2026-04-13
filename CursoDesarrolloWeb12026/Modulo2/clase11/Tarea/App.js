//Punto 1
console.log('Numeros del 1 al 100')
for (let i = 1; i <= 100; i++) {
    console.log(i)
}
console.log('--------Punto 2--------')
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
    console.log(i)
    };
}
console.log('-----------Punto 3----------')
console.log('Multiplos de 3')
for (let i = 1; i <= 10; i++) {
    console.log(i * 3);   
}

console.log('---------Punto 4-----------')
console.log('CalcularSumadel 1 al 10')
let suma = 0
//suma : 4+3+2+1 = 10
for (let i = 4; i >= 1; i--) {
    suma += i
}
console.log(suma)

console.log('otraformadellegara10')
let suma2 = 0
for (let i = 1; i <= 4; i++) {
    suma2 += i
}
console.log(suma2) //(1+2+3+4 = 10)

console.log('-------Extra------')
//limite es 4
let limite = 4
//renglon (i y j = a inde, indice)
for (let renglon = 1; renglon <= limite; renglon++) {
    let contenidoLinea = 'cada renglon ';
    //Repeticion con bucle 
    for (let repeticion = 1; repeticion <= renglon; repeticion++) {  
        contenidoLinea += renglon
    }
    console.log(contenidoLinea); 
}

console.log('------Forma simplificada------')
for (let i = 1; i <= 4; i++) console.log(String(i).repeat(i));

