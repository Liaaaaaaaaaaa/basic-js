const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */



function transform(arr) {
  let  result = []
  if(!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
 let arrNew = arr.flat();
  for (let i = 0; i < arr.length; i += 1) {
  console.log(arrNew[i] === undefined)
  
    if (typeof arrNew[i] === 'string') {
      switch (arrNew[i]) {
        case '--double-next':
          result.push(arrNew[i + 1]);
          break;
        case '--double-prev':
          result.push(arrNew[i - 1]);
          break;
        case '--discard-prev':
          result.pop();
          break;
        case '--discard-next':
          arrNew.splice(i, 2);
          break;
        case 'undefined':
          console.log('one');
          break;
        default:
          result.push(arrNew[i]);
      }
    }
    else if (arrNew[i] === 'undefined' || typeof arrNew[i] === undefined || typeof arrNew[i] === 'undefined') {
    } 
    // else if (arrNew[i] === undefined) {
    //   result.push(arrNew[i]);
    // }
    else {
      result.push(arrNew[i]);
    }
  }
  console.log(typeof result[0]);
  return result
}


// console.log(transform([ undefined, 1, 2, 3 ]) );
// transform([ undefined, 1, 2, 3 ]);
// console.log(transform(3.312312));
// console.log(transform(false));
// console.log(transform(true));
// console.log( transform(null));
// console.log(transform(undefined));
// console.log( transform({ 'foo': 'bar' }));


module.exports = {
  transform
};
