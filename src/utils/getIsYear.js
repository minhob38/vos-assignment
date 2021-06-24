const getIsYear = (year) => {
  const reg = /(19|20)\d{2}/;
  const isYear = reg.test(year) && year.length === 4;

  return isYear;
};

module.exports = getIsYear;
