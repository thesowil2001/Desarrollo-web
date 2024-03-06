"use strict";
// Definimos una función que imprime los números pares hasta un límite dado
function imprimirNumerosPares(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// Llamamos a la función e imprimimos los números pares hasta el 10
console.log("Números pares hasta 10:");
imprimirNumerosPares(10);
// Ahora vamos a definir una función que determina si un número es primo o no
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
// Llamamos a la función para verificar si ciertos números son primos
console.log("Verificación de números primos:");
const numeros = [7, 10, 13, 20, 29];
numeros.forEach(numero => {
    if (esPrimo(numero)) {
        console.log(numero + " es primo.");
    }
    else {
        console.log(numero + " no es primo.");
    }
});
