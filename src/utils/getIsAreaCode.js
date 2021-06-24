const getIsAreaCode = (areaCode) => {
  const reg = /\d{5}/;
  const isAreaCode = reg.test(areaCode) && areaCode.length === 5;

  return isAreaCode;
};

module.exports = getIsAreaCode;
