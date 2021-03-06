const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof +sampleActivity === 'number' || typeof sampleActivity !== 'string' 
  || sampleActivityNumber <= 0 || sampleActivityNumber > 15) {
    return false
  }

  let res = (Math.log(MODERN_ACTIVITY/sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(res);
};
