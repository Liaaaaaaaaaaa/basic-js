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
    const array = [];

    if(arr.length === 0) {
      return 1;
    }

    arr.forEach(item => {
      let counter = 1;
      if(Array.isArray(item)) {
        counter += this.calculateDepth(item);
      }
      array.push(counter);
    });    
      return array.sort((a, b) => b - a)[0];
    }  
  }




  // calculateDepth(arr) {
  //   let massive = [];
  //   for (let i = 0; i < arr.length; i += 1) {
  //     if (Array.isArray(arr[i])) {
  //       times++;
  //       massive.push(countMassive)
  //       countMassive++;
  //       this.calculateDepth(arr[i]);
  //     }
  //   }
  //   return times;
  // }


let one = new DepthCalculator();
console.log(one.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
// console.log(times);

module.exports = {
  DepthCalculator
};
