// const assertEqual = require("../assertEqual");
// const tail = require("../tail");


// const array = tail([5, "Lighthouse", "Labs"]);
// assertEqual(array.length, 2);
// assertEqual(array[0], "Lighthouse");
// assertEqual(array[1], "Labs");

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 'Lighthouse' for tail", () => {
    const test = [5, "Lighthouse"];
    assert.strictEqual(tail(test)[0], "Lighthouse");
  });

  it("returns 'Labs' for tail", () => {
    const test = [5, "Lighthouse", "Labs"];
    assert.strictEqual(tail(test)[1], "Labs");
  });
});