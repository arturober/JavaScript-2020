class Persona {
    // EXPERIMENTAL (propiedades fuera del constructor)
    // nombre;
    // edad;
    // carnet = false;

    // EXPERIMENTAL (propiedades estáticas)
    static registrados = [];

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }

    static registrar(persona) {
        Persona.registrados.push(persona);
    }
}

let p = new Persona("John", 35);
Persona.registrar(p);
console.log(Persona.registrados);

