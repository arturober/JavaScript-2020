let num = 23;

// num = "Hola"; // ERROR

function suma(num1: number, num2: number): number {
    return num1 + num2;
}

let resultado = suma(4, 6);

let array: number[] = [];
array.push(34);
// array.push("perro"); -> Error

let persona: {nombre: string, edad: number};
persona = {
    nombre: "Pedro",
    edad: 24
};

function showInfo(persona: {nombre: string, edad: number}) {
    console.log(persona.nombre + " - " + persona.edad);
}

showInfo({nombre: "Ana", edad: 35});

class Persona {
    constructor(private _nombre: string, private _edad: number) {}

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(nombre: number) {
        this._edad = nombre;
    }
}

let p = new Persona("Juan", 23);
console.log(p.nombre);
showInfo(p);

type rol = "admin" | "usuario";
let usuario: {nombre: string, rol: rol} = {
    nombre: "Juan",
    rol: "admin"
};

let input: HTMLInputElement;

document.getElementById("hola").addEventListener("click", e => {
    input = document.getElementById("i1") as HTMLInputElement;
    alert(input.value);
});

interface Rect {
    id?: number;
    lado1: number;
    lado2: number;
}

let rect: Rect = {
    lado1: 23,
    lado2: 12
};
