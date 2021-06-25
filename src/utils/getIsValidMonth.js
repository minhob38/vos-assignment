/**
 * @function it returns boolean whether month is valid on not
 * @description area code should be 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12 or specific month
 * @param {String} month - month
 * @param {String} constraint - specific month
 * @return {Boolean} isValidMonth - month's validation
 */

const getIsValidMonth = (month, constraint) => {
  let isValidMonth;

  if (constraint) {
    isValidMonth = month === constraint;
  } else {
    const reg = /0[1-9]|1[012]/;
    isValidMonth = reg.test(month) && month.length === 2;
  }

  return isValidMonth;
};

module.exports = getIsValidMonth;
