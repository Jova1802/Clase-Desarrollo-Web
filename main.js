//alert("Meensaje de alerta");

/*var nombre = 123123;

let edad = 26
const nombre2 = "Judy"

console.log(nombre2 + " tiene " + edad + " años.");

let arreglo = ["Marcela", "Carlos", "Pedro"];
arreglo[2] = "Juan";

console.log(arreglo);*/

const nombre = "Marcela";
let edad = 23;
let mensaje;

if (edad < 18) {
    mensaje = nombre + " es menor de edad";
} else {
    mensaje = nombre + " es mayor de edad";
}

console.log(mensaje);

//let info = document.write(mensaje);

let info = document.getElementById("dato");
info.innerHTML = mensaje;