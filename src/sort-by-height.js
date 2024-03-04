// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let massiveSort = [];
  let aCount = 0;
  let a = arr.filter(e => e !== -1).sort((a, b) => a - b);
 
console.log(a)
  for (let i = 0; i < arr.length; i += 1) {
    
    if (arr[i] === -1) {
      massiveSort.push(arr[i]);
    } else {
      massiveSort.push(a[aCount]);
      aCount += 1;
    }
  }
 return massiveSort;
}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));


module.exports = {
  sortByHeight
};
