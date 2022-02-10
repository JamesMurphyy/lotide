const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKey = function(array, callback) {
  for (const index in array) {
    if (callback(array[index])) {
      return index;
    }
  }
  return undefined;
};



let data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 2 }
};
let data2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 1 }
};

assertEqual(findKey(data2, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(data1, x => x.stars === 2), "Ora");
assertEqual(findKey(data2, x => x.stars === 2), undefined);