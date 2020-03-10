console.log(!!0); // false
console.log(!!25); // true
console.log(!!"hola"); // true
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false

let a = 3;
let b = 5;
console.log(a++ + ++b + --a + a-- + b--);
console.log(a, b);

console.log("123" < "9"); //true
console.log(123 < 9); // false