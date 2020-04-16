class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

let p = new Persona("Jane", 46);

let {nombre, edad} = p;

console.log(nombre);
console.log(edad);

function muestraPersona({nombre, edad}) {
    console.log(`Nombre: ${nombre}, edad: ${edad}`);
}

muestraPersona(p);
