let persona = {
    nombre: "Peter",
    edad: 45,
    trabajos: [
        {
            descripcion: "Malabarista de semáforos",
            duracion: 6
        },
        {
            descripcion: "Hombre cartel",
            duracion: 7
        }
    ],
    toString() {
        return `Nombre: ${this.nombre}, edad: ${this.edad} años`
    }
};

console.log(persona);
console.log(persona instanceof Object);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.toString());

console.log(persona.trabajos[0].descripcion);

persona.trabajos.forEach(trabajo => console.log(`Trabajo: ${trabajo.descripcion}, duración: ${trabajo.duracion}`))

console.log(typeof persona.toString);

Object.keys(persona).forEach(prop => {
    if(typeof persona[prop] !== "function") {
        console.log(`${prop}: ${persona[prop]}`);
    }
});
