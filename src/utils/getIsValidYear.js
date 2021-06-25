/**
 * @function it returns boolean whether year is valid on not
 * @description year should be 1900 ~ 2099 or specific year
 * @param {String} year - year
 * @param {String} constraint - specific year
 * @return {Boolean} isValidYear - year's validation
 */

const getIsValidYear = (year, constraint) => {
  let isValidYear;

  if (constraint) {
    isValidYear = year === constraint;
  } else {
    const reg = /(19|20)\d{2}/;
    isValidYear = reg.test(year) && year.length === 4;
  }

  return isValidYear;
};

module.exports = getIsValidYear;
