let array = ["casa", "coche", "perro", "casa", "casa", "coche", "casa", "perro"];
console.log(array);

let set = new Set(array);
console.log(set);

// let arraySinRepe = new Array(...set);
let arraySinRepe = Array.from(set);
console.log(arraySinRepe);
