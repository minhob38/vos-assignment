const Router = require("koa-router");
const landValueRouter = require("./landValueRouter");

const apiRouter = new Router();

apiRouter.use("/api", landValueRouter.routes());

module.exports = apiRouter;
