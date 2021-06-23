const Router = require("koa-router");
const landValueCtrl = require("./landValue.controller");

const landValue = new Router();

landValue.get("/land-value", landValueCtrl.getLandValue);

module.exports = landValue;
