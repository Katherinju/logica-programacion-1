// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
let contador;
const numero = [];

function getNumber() {
    for (contador = 0; contador < 3; contador++) {
        numero.push(prompt("Ingrese un número"));
    }
    console.log(numero);
}

function compararNumber() {
    if (numero[0] === numero[1] && numero[0] === numero[2] && numero[1] === numero[2]) {
        document.write(`Sus números ${NUMBER} : son iguales`)
        
    } else {
        document.write(`Orden de menor a mayor: ${(numero.sort((s, k) => s - k))}`);
        document.write(`Orden de mayor a menor: ${(numero.sort((s, k) => k - s))}`);
    }

}

getNumber();
compararNumber();