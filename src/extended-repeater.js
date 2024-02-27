const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  if (!additionSeparator) {
    additionSeparator = '|'
  }
  function createAnyStr(anyStr, anyRepeatTimes = 1, anySeparator = '+') {
    let anyMassive = [];
    if (anyStr === null) {
      anyStr = 'null'
    }
    for (let i = 0; i < anyRepeatTimes; i += 1) {
      anyMassive.push(anyStr);
    }
    let resultAdditionStr = anyMassive.join(anySeparator);
    return resultAdditionStr;
  }

  // console.log(createAnyStr(addition, additionRepeatTimes, additionSeparator));
  let additionStr = createAnyStr(addition, additionRepeatTimes, additionSeparator);
  let strPlusAddition = str + additionStr;
  let result = createAnyStr(strPlusAddition, repeatTimes, separator);
  console.log(result);
  return result;
}

// repeater('STRING',
//   {
//     repeatTimes: 3,
//     separator: '**',
//     addition: 'PLUS',
//     additionRepeatTimes: 3,
//     additionSeparator: '00'
//   });


// repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 });
// repeater('la', { repeatTimes: 3 });
// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });
// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });
// // null!!!!!!??? null!!!!!!??? null!!!!!!
// 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
// nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null

module.exports = {
  repeater
};
