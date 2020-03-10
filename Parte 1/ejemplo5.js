let num = 14;
console.log(num.toExponential());

let precio = 4.2676;
console.log(precio.toFixed(2));

console.log(4 + "hola"); // 4hola
console.log(4 * "hola"); // NaN
console.log(4 + "6"); // 46
console.log(4 * "6"); // 24
console.log("4" * "6"); // 24
console.log(5 - true); // 4 (5-1)
console.log(5 + false); // 0
console.log(5 * "true"); // NaN

function suma(n1, n2) {
    return +n1 + +n2; // Transforma a número y suma
}

let n1 = prompt("Dime un número:");
let n2 = prompt("Dime otro número:");
let res = suma(n1, n2);
if(isNaN(res)) {
    console.log("Valores no válidos!");
} else {
    console.log(res);
}
