const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = '';

  if (!Array.isArray(members)) {
    return false
  }

  members.forEach(function(el) {
    if (typeof el === 'string') {
      dreamTeam += el.trim().slice(0,1).toUpperCase();
    }
  });

  return dreamTeam.split('').sort().join('');
};
