const { LandValue } = require("../../../database/models");

const getLandValue = async (ctx, next) => {
  const tables = await LandValue.findAll();
  ctx.body = "hello";
};

module.exports = {
  getLandValue,
};
