const getIsYear = (year) => {
  const reg = /^[12]\d{3}/;
  const isYear = reg.test(year) && year.length === 4;

  return isYear;
};

module.exports = getIsYear;
