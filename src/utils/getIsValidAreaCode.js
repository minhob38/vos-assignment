/**
 * @function it returns boolean whether area code is valid on not
 * @description area code should be 5 digits
 * @param {String} areaCode - area code
 * @return {Boolean} isValidAreaCode - area code's validation
 */

const getIsValidAreaCode = (areaCode) => {
  const reg = /\d{5}/;
  const isValidAreaCode = reg.test(areaCode) && areaCode.length === 5;

  return isValidAreaCode;
};

module.exports = getIsValidAreaCode;
