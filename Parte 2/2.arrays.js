let a = ["casa", "coche"];
a.push("perro", "árbol");

console.log(a.toString());

let ultimo = a.pop();

console.log(`He eliminado ${ultimo} del array ${a}`);

let nums = [10, 20, 30, 40, 50, 60];
nums.splice(2, 2);
console.log(nums.toString()); // 10, 20, 50, 60
nums.splice(2, 0, 21, 23);
console.log(nums.toString()); // 10, 20, 21, 23, 50, 60
nums.splice(0, 1, 5, 6);
console.log(nums.toString()); // 5, 6, 20, 21, 23, 50, 60