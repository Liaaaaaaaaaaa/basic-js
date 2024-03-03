const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

let commonCount = 0;
let sameElement = [];

function getCommonCharacterCount(s1, s2) {
  let s1Massive = s1.split('');
  let s2Massive = s2.split('');
  // console.log(s2Massive)

  for (let i = 0; i < s1Massive.length; i += 1) {
    sameElement.push(s2Massive.filter(e => e === s1Massive[i]));
    sameElement = sameElement.flat(2);
    let sameElementSet = new Set(sameElement);
    commonCount = sameElementSet.size;
  }
  // console.log(commonCount);
  // console.log(sameElement);

  if (commonCount > s1Massive.length || commonCount > s2Massive.length) {
    console.log('rrr');
    return (s1Massive.length > s2Massive.length) ? s2Massive.length : s1Massive.length;
  } else {
    return commonCount;
  }

}


// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));
// console.log(getCommonCharacterCount('abca', 'xyzbac'));
console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
