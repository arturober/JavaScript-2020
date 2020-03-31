let array = new Array();
let array2 = ["a", "b", "c", "d", "e", "f"];

console.log(array2.toString());

array2.push("g");

console.log(array2.toString());

// array2.splice(-3, 3);
array2.length = 4;

console.log(array2.toString());

function modificaPos(array, pos) {
    array[pos] = 999;
}

let nums = [1,2,3,4,5];
modificaPos(nums, 2);
console.log(nums.toString());

nums.forEach(n => console.log(n));

for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
