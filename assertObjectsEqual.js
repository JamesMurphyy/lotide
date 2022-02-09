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

const assertObjectsEqual = function(o1, o2) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(o1)}`);
  if (eqObjects(o1,o2)) {
    console.log(`🟢Assertion Passed: Arrays are equal`);
  } else {
    console.log(`🔴Assertion Failed: Arrays are not equal`);
  }
};

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1',});