// const { NotImplementedError } = require('../extensions/index.js');
// throw new NotImplementedError('Not implemented');
// // remove line with error and write your code here

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */


function renameFiles(names) {
  let massiveOutput = [];
  let massiveMiddleput = [];
  let countRepeat = 0;
  // console.log(names);
  for (let i = 0; i < names.length; i += 1) {
    // console.log(massiveOutput.includes(names[i]))
    console.log(names[i].slice(names[i].length - 1) === ')');
    if (massiveMiddleput.includes(names[i]) || (names[i].slice(names[i].length - 1) === ')' && massiveOutput.includes(names[i]))) {
      if (massiveMiddleput.includes(names[i])) {
        countRepeat += 1;
      }
      if(countRepeat === 0) {
        countRepeat = 1
      }

      massiveOutput.push(names[i] + '(' + countRepeat + ')');
      massiveMiddleput.push(names[i]);

    } else {
      massiveOutput.push(names[i]);
      massiveMiddleput.push(names[i]);

    }
  }
  return massiveOutput
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))
console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));
console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']));



module.exports = {
  renameFiles
};
