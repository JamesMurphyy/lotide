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
      if (array1[i] !== array2[i]) {
        ans = false;
      }
    }
  }
  return ans;
};


const eqObjects = function(object1, object2) {
  let object1keys = Object.keys(object1);
  let object2keys = Object.keys(object2);
  let object1values = Object.values(object1);
  let object2values = Object.values(object2);

  if (object1keys.length !== object2keys.length || object1values.length !== object2values.length) {
    return false;
  } else {
    for (const value in object1keys) {
      if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
        return eqArrays(object1[value], object2[value]);
      } else {
        if (object1[value] !== object2[value]) {
          return false;
        }
      }
    }
  }
  return true;
};
// const ab = { a: "1", a: "2" };
// const ba = { a: "1", a: "2" };
// console.log(eqObjects(ab, ba));
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));

module.exports = {
  eqObjects,
  assertEqual};