const Router = require("koa-router");
const landValue = require("./landValue/landValue");

const api = new Router();

api.use("/api", landValue.routes());

module.exports = api;
