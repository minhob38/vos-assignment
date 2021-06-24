const sequelize = require("sequelize");
const { LandValue } = require("..");

const getValuableLands = async (areaCode, baseYear, baseMonth) => {
  // const areaCodeReg = /\d{5}/;
  // const isAreaCodeValid = areaCodeReg.test(areaCode) && areaCode.length < 6;

  // const yearReg = /^[12]\d{3}/;
  // const isYearValid = yearReg.test(baseYear) && baseYear.length < 5;

  // const monthReg = /0[1-9]|1[012]/;
  // const isMonthValid = monthReg.test(baseMonth) && baseMonth.length < 3;

  // if (!isAreaCodeValid || !isYearValid || !isMonthValid) {
  //   throw new Error();
  // }

  const valuableLands = await LandValue.findAll({
    attributes: [
      "pnu",
      ["public_price", "publicPrice"],
      ["base_year", "baseYear"],
      ["base_month", "baseMonth"],
    ],
    where: {
      pnu: { [sequelize.Op.startsWith]: areaCode },
      base_year: baseYear,
      base_month: baseMonth,
    },
    limit: 20,
    order: [
      [sequelize.cast(sequelize.col("public_price"), "BIGINT"), "DESC"],
      [sequelize.cast(sequelize.col("pnu"), "BIGINT"), "ASC"],
    ],
    raw: true,
  });

  return valuableLands;
};

module.exports = {
  getValuableLands,
};
