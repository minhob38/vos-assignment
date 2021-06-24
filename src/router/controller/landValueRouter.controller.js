const createError = require("http-errors");
const { getValuableLands } = require("../../../database/models/controller/landValue.controller");
const getIsAreaCode = require("../../utils/getIsAreaCode");
const getIsYear = require("../../utils/getIsYear");
const getIsMonth = require("../../utils/getIsMonth");

const getLandValue = async (ctx, next) => {
  try {
    const code = ctx.query["area-code"];
    const year = ctx.query["base-year"];
    const month = ctx.query["base-month"];

    if (!getIsAreaCode(code) || !getIsYear(year) || !getIsMonth(month)) {
      ctx.throw(400, "Invalid Request");
    }

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
    ctx.app.emit("error", createError(err.status, err.message), ctx);
  }
};

module.exports = {
  getLandValue,
};
