let suma = function(num1, num2) {
    return num1 + num2;
}

let suma2 = (num1, num2) => num1 + num2;

console.log(suma(6, 8));

function operar(num1, num2, funcOp) {
    console.log(`He recibido los números ${num1} y ${num2}`);
    console.log(`Resultado: ${funcOp(num1, num2)}`);
}

operar(4, 7, suma);
operar(6, 8, function(n1, n2) {
    return n1 * n2;
});
operar(16, 7, (n1, n2) => n1 - n2);
operar(16, 8, (n1, n2) => n1 / n2);

function hola(nombre = "Anónimo") {
    console.log(`Hola ${nombre}`);
}

hola("Juan");
hola();