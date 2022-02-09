const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



const findKeyByValue = function (object, value) {

  let key = Object.keys(object);
  let values = Object.values(object);
  let ans = "";
  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) {
      ans = key[i];
    }
  }
  return ans;
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);