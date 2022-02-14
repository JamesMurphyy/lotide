const assertEqual = require("../assertEqual");
const tail = require("../tail");


const array = tail([5, "Lighthouse", "Labs"]);
assertEqual(array.length, 2);
assertEqual(array[0], "Lighthouse");
assertEqual(array[1], "Labs");
