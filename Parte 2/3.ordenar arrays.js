let nums = [24, 16, 9, 114, 83, 7, 35];
nums.sort();
console.log(nums.toString()); // 114,16,24,35,7,83,9

nums.sort((n1, n2) => n1 - n2);
console.log(nums.toString()); // 7,9,16,24,35,83,114


