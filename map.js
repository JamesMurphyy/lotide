const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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


const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);

const results = map(words, word => word[0]);
console.log(results);
assertArraysEqual(results[3], "m");
assertArraysEqual(results[4], "t");

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

