'use strict';

function holaMundo() {
    console.log("hola mundo!");
}

holaMundo();

function hola(nombre, edad) {
    console.log(`Soy ${nombre}, y tengo ${edad} años`);
}

hola("Pepe", 25); // Soy Pepe, y tengo 25 años
hola(true, new Array(4)); // Soy true, y tengo ,,, años
hola("Marta", 44); // Soy Marta, y tengo 44 años
hola(); // Soy undefined, y tengo undefined años

function suma(num1, num2) {
    return num1 + num2;
}

let resultado = suma(4, 7);
console.log(resultado); // 11

console.log(suma("corona", "virus")); //coronavirus

function compara(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function comparaTernario(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(compara(13, 21));
console.log(comparaTernario(13, 21));

let edad = 14;
let permiso = false;

if(edad < 16) {
    console.log("Menor de 16. No puedes trabajar");
} else if (edad < 18) {
    if(permiso) {
        console.log("Entre 16 y 18. Puedes trabajar.");
    } else {
        console.log("Entre 16 y 18. No puedes trabajar.");
    }
} else {
    console.log("Adulto. Puedes trabajar.");
}

console.log(
    edad < 16 ? 
        "Menor de 16. No puedes trabajar"
        : edad < 18 ?
            permiso ?
                "Entre 16 y 18. Puedes trabajar."
                : "Entre 16 y 18. No puedes trabajar."
            : "Adulto. Puedes trabajar."
);
