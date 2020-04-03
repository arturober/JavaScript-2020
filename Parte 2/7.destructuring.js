// function mostrarInfo(persona) {
//     console.log(`Nombre: ${persona[0]}, edad ${persona[1]}`);
// }

// function mostrarInfo(persona) {
//     let nombre = persona[0];
//     let edad = +persona[1];
//     console.log(`Nombre: ${nombre}, edad: ${edad}`);
// }

function mostrarInfo([nombre, edad]) {
    console.log(`Nombre: ${nombre}, edad: ${edad}`);
}

let personas = [
    ["Pepe", 45],
    ["Pedro", 36],
    ["Ana", 27]
];

personas.forEach(persona => mostrarInfo(persona));

let [[nombre1, edad1],[nombre2, edad2],[nombre3, edad3]] = personas;

let [,[nombrePedro]] = personas;
