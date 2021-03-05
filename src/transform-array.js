const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === '--discard-next') {
      array.push('empty el');
    } else if (arr[i + 1] === '--discard-prev') {
      array.push('empty el');
    } else if (arr[i] === '--double-next') {
      array.push(arr[i + 1])
    } else if (arr[i] === '--double-prev') {
      array.push(array[array.length - 1])
    } else {
      array.push(arr[i])
    }
  }

  let complete = array.filter(el => 
  el != "empty el" &&
  el != "--discard-next" &&
  el != "--discard-prev" &&
  el != undefined
  );

  return complete;
};
