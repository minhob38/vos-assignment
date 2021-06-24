const sequelize = require("sequelize");
const { LandValue } = require("..");

const getValuableLands = async (areaCode, baseYear, baseMonth) => {
  // validation, 정규식 활용
  if (areaCode.length > 5) {
    throw new Error();
  }

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
    ],
    raw: true,
  });

  return valuableLands;
};

module.exports = {
  getValuableLands,
};
