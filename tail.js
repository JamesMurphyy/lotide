const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};

const array = tail([]);
assertEqual(array.length, 2);
assertEqual(array[0], "Lighthouse");
assertEqual(array[1], "Labs");