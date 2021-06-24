const getIsMonth = (month) => {
  const reg = /0[1-9]|1[012]/;
  const isMonth = reg.test(month) && month.length === 2;

  return isMonth;
};

module.exports = getIsMonth;
