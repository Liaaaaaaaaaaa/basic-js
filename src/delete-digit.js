// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */


function deleteDigit(n) {
  let massiveNumbers = [];
  let nString = String(n);
  console.log(nString.slice(2,2));

  for (let i = 0; i < nString.length; i += 1) {
    massiveNumbers.push(nString.replace(nString[i], ''));
    // console.log(nString.replace(nString[i], ''));
    massiveNumbers.sort();
  }
return +massiveNumbers[massiveNumbers.length-1];
}

// console.log(deleteDigit(1234578900));
// console.log( deleteDigit(152));
// console.log( deleteDigit(109));

module.exports = {
  deleteDigit
};
