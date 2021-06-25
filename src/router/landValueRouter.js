const Router = require("koa-router");
const landValueRouterCtrl = require("./controller/landValueRouter.controller");

const landValueRouter = new Router();

landValueRouter.get("/land-value", landValueRouterCtrl.getLandValue);

module.exports = landValueRouter;
