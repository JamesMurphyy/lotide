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


const without = function(source, itemsToRemove) {
  let ans = [];
  for (let i = 0; i < source.length; i ++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (remove === false) {
      ans.push(source[i]);
    }
  }
  return ans;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(words);
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
