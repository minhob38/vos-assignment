const createError = require("http-errors");
const { getValuableLands } = require("../../../database/models/controller/landValue.controller");

const getLandValue = async (ctx, next) => {
  try {
    const code = ctx.query["area-code"];
    const year = ctx.query["base-year"];
    const month = ctx.query["base-month"];

    const landValues = await getValuableLands(code, year, month);

    const _landValues = landValues.map((landValue) => {
      const { pnu, publicPrice, baseYear, baseMonth } = landValue;

      return {
        pnu,
        publicPrice,
        pub_date: `${baseYear}년 ${baseMonth}월`,
      };
    });

    ctx.status = 200;
    ctx.type = "application/json";
    ctx.body = _landValues;
  } catch (err) {
    console.log(`GET: /api/land-value/query: ${err}`);
    ctx.app.emit("error", createError(500, "Internal Server Error"), ctx);
  }
};

module.exports = {
  getLandValue,
};
