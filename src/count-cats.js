const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// let  matrix = [
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
//   ];
  
  
function countCats(matrix ) {
  // throw new NotImplementedError('Not implemented');
  
  return matrix.flat(2).filter(e => e === '^^').length





}

// console.log(matrix);
// console.log(countCats(matrix ));
// console.log('hello')

module.exports = {
  countCats
};
