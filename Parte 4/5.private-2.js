class Persona {
    // EXPERIMENTAL (propiedades y métodos privados)
    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.#nombre} y tengo ${this.#edad} años`);
    }

    get nombre() {
        return "*** " + this.#nombre + " ***";
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }
}

let p = new Persona("Pepe", 35);
console.log(p.nombre); // *** Pepe *** (llama al getter)
