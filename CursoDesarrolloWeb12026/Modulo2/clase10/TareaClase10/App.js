//Declaracionde Variables
let nombre = 'Gabriel';
let apellido = 'Moreno';
let pais = 'Argentina';
let edad = 26;
let tieneTrabajo = false;

//mostrar todos los datos
let mensaje = `Nombre: ${nombre},Apellido: ${apellido}, Pais: ${pais}, Edad: ${edad}, Tiene trabajo: ${tieneTrabajo ? 'Si' : 'No' }`;
console.log(mensaje);

//Mayor o menor de EDAD
if (edad >= 18) {
    console.log('Es mayor  de edad');
}else {
    console.log('eS menor de edad');
}

//tiene trabajo
if (tieneTrabajo) {
    console.log('tiene trbajo');
} else {
    console.log('no tien trabajo');
}

//si tiene trabajo y es mayor de edad
if (edad >= 18 && tieneTrabajo) {
    console.log('esta trabajando y puede trabajar')
}
else if (edad >= 18 && !tieneTrabajo) {
    console.log('tiene edad para trabajar pero no tiene trabajo')
} else {
    console.log('No puede trabajar')
}
