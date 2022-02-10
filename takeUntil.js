const takeUntil = function(array, callback) {
let results = []
  for (const item of array)  
    if (!callback(item)) {
      results.push(item)
    } else {
      return results
    }
  
}






const eqArrays = function(array1, array2) {
  let ans = true;
  if (array1.length !== array2.length) {
    ans = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        ans = false;
      }
    }
  }
  return ans;
};


const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1,a2)) {
    console.log(`🟢Assertion Passed: Arrays are equal`);
  } else {
    console.log(`🔴Assertion Failed: Arrays are not equal`);
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2[2], "to");