const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

// let date1 = 
// new Date(2020, 02, 31);
// {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// console.log ( date1.getUTCMonth());

function getSeason(date) {
  if (date === undefined) {
    console.log('zero')
    return 'Unable to determine the time of year!'
  }

  if (typeof date !== "object") {
    console.log('object');
    return "Invalid date!";
    
  }

 try {date.getUTCMonth()} 
  catch (error) { 
   return 'Invalid date!';
  }
  

  
  // throw new NotImplementedError('Not implemented');

  let month = date.getUTCMonth();
  let season = '';

  console.log(month);

  if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else if (month >= 8 && month <= 10) {
    season = 'autumn';
  } else {
    season = 'winter';
  }
  return season
}

// console.log(getSeason(date1 ))

module.exports = {
  getSeason
};
