const _ = require("lodash");

const numbers = [33, 31, 11, 3, 67, 3];

_.each(numbers, function(number, i) {
  console.log(number);
});
