class Persona {
    // EXPERIMENTAL (propiedades fuera del constructor)
    // nombre;
    // edad;
    // carnet = false;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

let p = new Persona("Ana", 53);
console.log(p.nombre);
console.log(p.edad);
console.log(p);

p.saludar();
