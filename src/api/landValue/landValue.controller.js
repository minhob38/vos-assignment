const sequelize = require("sequelize");
const createError = require("http-errors");
const { LandValue } = require("../../../database/models");

const getLandValue = async (ctx, next) => {
  // 요청 숫자 크기가 5가 아니면 에러 발생!
  try {
    const landValues = await LandValue.findAll({
      attributes: ["pnu", "public_price", "base_year", "base_month"],
      where: {
        pnu: { [sequelize.Op.startsWith]: "111101" },
        base_year: "2020",
        base_month: "1",
      },
      limit: 20,
      order: [
        [sequelize.cast(sequelize.col("public_price"), "BIGINT"), "DESC"],
      ],
      raw: true,
    });

    const _landValues = landValues.map((landValue) => {
      const { pnu, public_price, base_year, base_month } = landValue;

      return {
        pnu,
        public_price,
        pub_date: `${base_year}년 ${base_month}월`,
      };
    });

    ctx.status = 200;
    ctx.type = "application/json";
    ctx.body = _landValues;
  } catch (err) {
    console.log(`GET: /api/land-value/pnu: ${err}`);
    ctx.app.emit("error", createError(500, "Internal Server Error"), ctx);
  }
};

module.exports = {
  getLandValue,
};
