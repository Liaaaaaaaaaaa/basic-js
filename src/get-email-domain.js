const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let massiveEmail = email.split('@');
  return massiveEmail[massiveEmail.length -1]
}

console.log(getEmailDomain('prettyandsimple@example.com'));
console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));

module.exports = {
  getEmailDomain
};
