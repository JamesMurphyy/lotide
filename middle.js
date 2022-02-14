const middle = function(array) {
  let x = [];
  if (array.length < 3) {
    x.push();
    return x;
  } else if (array.length % 2 !== 0) {
    x.push(array[Math.floor(array.length / 2)]);
    return x;
  } else {
    x.push(array[Math.floor(array.length / 2) - 1]);
    x.push(array[Math.floor(array.length / 2)]);
    return x;
  }
};

module.exports = middle;