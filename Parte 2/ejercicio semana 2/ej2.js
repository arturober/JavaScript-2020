'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (incluida)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por "==>"
 */

console.log('--------------- APARTADO 1 -----------------');

let array = [10, 20, 30, 40];
console.log(array.toString());
array.push(50, 60);
array.unshift(-10, 0);
console.log(array.toString()); // [-10, 0, 10, 20, 30, 40, 50, 60]
array.splice(3, 3);
console.log(array.toString()); // [-10, 0, 10, 50, 60]
array.splice(-1, 0, 51, 52);
console.log(array.join("==>")); // [-10, 0, 10, 50, 51, 52, 60]

/**
 * Apartado 2
 * Crea una función que reciba 2 parámetros. El primero será el nombre de una persona,
 * y el segundo serán los trabajos que ha realizado esa persona (usa rest para agruparlos en un array).
 * Posible llamada -> printTrabajos("Pepe", "Albañil", "Programador", "Buscador de tesoros")
 * La función simplemente mostrará por consola el nombre y los trabajos recorriéndolos con un for..of
 */

console.log('--------------- APARTADO 2 -----------------');



/**
 * Apartado 3
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 3 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos']
];

let msgError = mensajes.filter(([producto, msg]) => msg.startsWith('ERROR'));

msgError.forEach(([producto, msg]) => {
    // El producto no está en el Map
    // Inserto la clave producto con un array que contiene el mensaje como valor
    // El producto está en el Map
    // Obtengo su valor (array de mensajes) e inserto el nuevo mensaje en ese array
});

// Recorrermos Map y mostramos valores

/**
 * Apartado 4
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 4 -----------------');

/**
 * Apartado 5
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');
