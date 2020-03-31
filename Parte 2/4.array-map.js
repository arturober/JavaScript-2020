let palabras = ["coche", "murciélago", "abanico", "perro", "mesa"];
let longitudes = palabras.map(palabra => palabra.length);
console.log(longitudes); // [5, 10, 7, 5, 4]

let largas = palabras.filter(palabra => palabra.length > 6); // palabras de más de 6 caracteres
console.log(largas.toString()); // murciélago, abanico

let a = [1,2,3,4];
console.log(a.toString()); 
a.push(5,6);
console.log(a.toString());
a.unshift(-2, -1);
console.log(a.toString());

let concatenadas = palabras.reduce((cadena, palabra) => cadena + " - " + palabra);
console.log(concatenadas);

let sumaLogitudes = palabras.reduce((total, palabra) => total + palabra.length, 0);

let palabraCorta = palabras.find(palabra => palabra.length > 6);
console.log(palabraCorta); // murciélago
