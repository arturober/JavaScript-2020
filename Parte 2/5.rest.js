function suma(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

let resultado = suma(23, 24, 53, 6);
console.log(resultado);
let resultado2 = suma(23, 2, 3, 4, 5, 6, 7);
console.log(resultado2);
let resultado3 = suma();
console.log(resultado3);


