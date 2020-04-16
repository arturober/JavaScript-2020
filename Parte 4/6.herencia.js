class Animal {
    constructor(nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
    }

    hablar() {
        console.log("..........");
    }

    comer() {
        this.peso += Math.random();
        console.log(`Ñam ñam. Ahora peso ${this.peso.toFixed(2)} kilos`);
    }
}

class Pajaro extends Animal {
    constructor(nombre, peso, puedeVolar) {
        super(nombre, peso);
        this.puedeVolar = puedeVolar;
    }

    hablar() {
        console.log("Pio pio");
    }

    comer() {
        this.peso += 0.05;
        console.log(`Pio pio. Ahora peso ${this.peso.toFixed(2)} kilos`);
    }
}

// let animal = new Animal("Paco", 5.6);
// animal.hablar();
// animal.comer();

let pajaro = new Pajaro("Federico", 0.9, true);
pajaro.hablar();
pajaro.comer();

console.log(pajaro instanceof Pajaro); // true
console.log(pajaro instanceof Animal); // true
console.log(pajaro instanceof Object); // true
console.log(pajaro instanceof Date); // false
