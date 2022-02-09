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

const middle = function(array) {
  let x = []
  if (array.length < 3) {
    x.push()
    return x
  } else if (array.length % 2 !== 0) {
    x.push(array[Math.floor(array.length/2)])
    return x
  } else {
    x.push(array[Math.floor(array.length/2) - 1])
    x.push(array[Math.floor(array.length/2)])
    return x
  }
}
// console.log(middle([1]))
// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3]))
// console.log(middle([1, 2, 3, 4, 5]))
// console.log(middle([1, 2, 3, 4]))
// console.log(middle([1, 2, 3, 4, 5, 6]))

assertArraysEqual(middle([1 ,2 ,3 ,4 ,5]), [3])
assertArraysEqual(middle([1, 2]), [])