const eqArrays = function(array1, array2) {
  let ans = true;
  if (array1.length !== array2.length) {
    ans = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i],array2[i])) {
          ans = false;
        }
      } else {
        if (array1[i] !== array2[i])
          ans = false;
      }
    }
  }
  return ans;
};

module.exports = eqArrays