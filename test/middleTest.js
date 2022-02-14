// const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");
// // console.log(middle([1]))
// // console.log(middle([1, 2]))
// // console.log(middle([1, 2, 3]))
// // console.log(middle([1, 2, 3, 4, 5]))
// // console.log(middle([1, 2, 3, 4]))
// // console.log(middle([1, 2, 3, 4, 5, 6]))

// assertArraysEqual(middle([1 ,2 ,3 ,4 ,5]), [3]);
// assertArraysEqual(middle([1, 2]), []);

const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns '3' for [1, 2, 3, 4, 5]", () => {
    const test = [1, 2, 3, 4, 5];
    assert.strictEqual(middle(test)[0], 3);
  });

  it("returns 'Labs' for tail", () => {
    const test = [1, 2, 3];
    assert.strictEqual(middle(test)[0], 2);
  });
});