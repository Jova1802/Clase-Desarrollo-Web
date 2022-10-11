//---------------------------------------------- variables, arreglos, if --------------------------------

//alert("Meensaje de alerta");

/*var nombre = 123123;

let edad = 26
const nombre2 = "Judy"

console.log(nombre2 + " tiene " + edad + " años.");

let arreglo = ["Marcela", "Carlos", "Pedro"];
arreglo[2] = "Juan";

console.log(arreglo);*/

/*const nombre = "Marcela";
let edad = 23;
let mensaje;

if (edad < 18) {
    mensaje = nombre + " es menor de edad";
} else {
    mensaje = nombre + " es mayor de edad";
}

console.log(mensaje);*/

//let info = document.write(mensaje);

/*let info = document.getElementById("dato");
info.innerHTML = mensaje;*/

//-------------------------------------------------ciclos for, while, do while -----------------------------------

/*let mensaje2 = "La tabla del 8 y 9 es: </br>";
let mult = 0;

for (let i = 0; i < 10; i++) {
    mult = 8 * i;
    mensaje2 = mensaje2 + 8 + " x " + i + " = " + mult + "</br>";
}*/

/*let i = 0;
while (i < 10) { // ciclo while
    mult = 9 * i;
    mensaje2 = mensaje2 + 9 + " x " + i + " = " + mult + "</br>"
    i++;

}

i = 0;
do { // ciclo do while
    mult = 8 * i;
    mensaje2 = mensaje2 + 9 + " x " + i + " = " + mult + "</br>"
    i++;
} while (i < 10);


let info = document.getElementById("dato");
info.innerHTML = mensaje2;*/

//----------------------------------------------------------------funciones----------------------------------------------------------------
// funcion normal
/*let nombre = "Marcela";

function muestraMiNombre() {
    document.body.innerHTML = "<h1> Mi nombre es: " + nombre + "</h1>";
}

muestraMiNombre();*/


// funcion anonima
/*let saludo = function() {
    return "Hola. </br>";
}

document.write(saludo());

// funcion flecha
const saludo2 = (nombre2) => {
    return "Hola " + nombre2 + " <br>";
}

document.write(saludo2("Judy"));*/

// funcion predefinida
/*let num = "8";
let suma = parseInt(num) + 5;
document.write(suma);

// funcion de autoinvocacion
(function() {
    alert("Hola a todos");
})()*/

/*(function(nombre) {
    alert("Hola " + nombre);
})("marcela")*/

// funcion dentro de otra funcion

/*function a(num) {
    function b(num2) {
        return num2 * 3;
    }
    return b(num);
}
document.write(a(8));*/

// funcion que retorna otr funcion

/*function a() {
    alert("hola");
    return function() {
        return alert("Judy");
    }
}

a()();*/

//funcion llamados call y apply
/*function sumar(a, b) {
    return a + b;
}

var c = sumar.call(c, 9, 4);

document.write(c);

c = sumar.apply(c, [8, 6]);
document.write(c);*/

//importacion normal
/*import { heroes } from "./datos/data.js";

console.log(heroes);*/

//importacion por defecto

/*import heroes from './datos/data.js';
console.log(heroes);*/

// impor export individual

import heroes, { owner } from './datos/data.js';
console.log(heroes);

//opcion dos