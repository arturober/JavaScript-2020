let fecha1 = new Date();

let resultado = prompt("4+6");

let fecha2 = new Date();

let difMs = fecha2 - fecha1;

console.log(`Has tardado ${difMs/1000} segundos en responder`);

let fechaNac = new Date("1989-02-15");
let ahora = new Date();

let vidaMs = ahora - fechaNac;

let dias = vidaMs / 1000 / 60 / 60 / 24;

console.log(`Has vivido ${Math.floor(dias)} días`);
