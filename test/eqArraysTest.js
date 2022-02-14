const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));