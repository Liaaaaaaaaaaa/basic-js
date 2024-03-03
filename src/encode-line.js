const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let countLetter = 1;
  // console.log(str.length);
  for (let i = 0; i < str.length; i += 1) {
// console.log(i)

    if (str[i] === str[i + 1]) {
      countLetter += 1;

    } else {
      result = result + countLetter + str[i];
      countLetter = 1;
    }
  }
  // console.log(str);
  console.log(result);
  return result.replaceAll('1', '')
}

console.log(encodeLine('abbcca'))

module.exports = {
  encodeLine
};
