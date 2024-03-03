// const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */


function isMAC48Address(n) {
  let massiveN = n.split('-');
  massiveLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  let countRightElements = 0;
  let result = false;

  if (massiveN.length === 6 && massiveN.filter(e => e.length === 2).length === 6) {
    let massiveNElements = massiveN.join('').split('')
    // console.log(massiveNElements.length);

    for (let i = 0; i < massiveNElements.length; i += 1) {
      if (massiveLetters.includes(massiveNElements[i]) || massiveNElements[i] < 10) {
        countRightElements += 1
      }
    }

    if (countRightElements === 12) {
      result = true;
    }
  }
  return result
}

console.log(isMAC48Address('00-1B-63-84-45-6A'));

module.exports = {
  isMAC48Address
};
