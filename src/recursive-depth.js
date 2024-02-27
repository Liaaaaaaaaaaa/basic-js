// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

let times = 1;
let countMassive = 0;

class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    let massive = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        times++;
        massive.push(countMassive)
        countMassive++;
        this.calculateDepth(arr[i]);
      }
    }
    return times;
  }
}

// let one = new DepthCalculator();
// console.log(one.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
// console.log(times);

module.exports = {
  DepthCalculator
};
