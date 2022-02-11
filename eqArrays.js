const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let ans = true;
  if (array1.length !== array2.length) {
    ans = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i],array2[i])) {
          ans = false;
        }
      } else {
        if (array1[i] !== array2[i])
          ans = false;
      }
    }
  }
  return ans;
};





console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));

console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));