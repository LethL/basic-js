const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } if (isNaN(date.getTime())) {
    throw new Error('THROWN');
  }
  if (date.getMonth() > 1 && date.getMonth() < 5) {
    return 'spring';
  } if (date.getMonth() > 4 && date.getMonth() < 8) {
    return 'summer';
  } if (date.getMonth() > 7 && date.getMonth() < 11) {
    return 'fall';
  } if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    return 'winter';
  } 
};
