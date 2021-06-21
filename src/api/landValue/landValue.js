const Router = require("koa-router");
const landValueCtrl = require("./landValue.controller");

const landValue = new Router();

landValue.get("/seoul", landValueCtrl.getLandValue);

module.exports = landValue;
