// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// let members = {};

function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false
  }
  // throw new NotImplementedError('Not implemented');
  console.log(members.filter(e => typeof e) !== 'string');
  let stringMembers = members.filter(e => typeof e === 'string');
  let title = stringMembers.map(e => e.trim().slice(0, 1).toUpperCase()).sort();
  if (title.length === 0) {
    return false
  }
  console.log(stringMembers);
  console.log(title);
  return title.join('')

}
// console.log(createDreamTeam(members));

module.exports = {
  createDreamTeam
};
