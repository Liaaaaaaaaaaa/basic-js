const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
  ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// let objectDomains = {};

function getDNSStats(domains) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let massiveDomains = [];
  for (let i = 0; i < domains.length; i += 1) {
    let domainsElem = domains[i].split('.').reverse();


    for (let t = 0; t < domainsElem.length; t += 1) {
      massiveDomains.push([]);
      console.log(massiveDomains);
      massiveDomains[t].push([domainsElem[t]]);
    }

    massiveDomains = massiveDomains.filter(e => e.length);
    console.log(massiveDomains);
    

    for (let i = 0; i < massiveDomains.length; i+=1) {
      let massiveOneDomain = massiveDomains[i].flat();
      let setOneDomainSet = Array.from(new Set (massiveOneDomain)) ;
      console.log(setOneDomainSet);
      objectDomains[setOneDomainSet[0]] = 0
    }
 
    console.log(objectDomains)

  }


  // massiveSet = new Set(massiveDomains.flat(5));
  // objectDomains[".ru "] = 3;
}


// getDNSStats(domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ])

module.exports = {
  getDNSStats
};
