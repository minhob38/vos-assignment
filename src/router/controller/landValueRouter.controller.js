const createError = require("http-errors");
const { getValuableLands } = require("../../../database/models/controller/landValue.controller");

const getLandValue = async (ctx, next) => {
  try {
    const code = ctx.query["area-code"];
    const year = ctx.query["base-year"];
    const month = ctx.query["base-month"];

    const codeReg = /\d{5}/;
    const monthReg = /0[1-9]|1[012]/;
    const yearReg = /^[12]\d{3}/;
    const isCodeValid = codeReg.test(code) && code.length === 5;
    const isYearValid = yearReg.test(year) && year.length === 4;
    const isMonthValid = monthReg.test(month) && month.length === 2;

    if (!isCodeValid || !isYearValid || !isMonthValid) {
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
    console.log(`GET: /api/land-value/query: ${err}`);
    ctx.app.emit("error", createError(err.status, err.message), ctx);
  }
};

module.exports = {
  getLandValue,
};
