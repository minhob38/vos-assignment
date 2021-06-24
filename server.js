const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const http = require("http");
require("dotenv").config();

const database = require("./database/models");
const apiRouter = require("./src/router/apiRouter");
const errorHandler = require("./src/router/controller/errorHandler.controller");

const app = new Koa();
const router = new Router();

const server = http.createServer(app.callback());
const port = process.env.PORT || 3000;

app.use(logger());

router.use(apiRouter.routes());
app.use(router.routes());

app.on("error", errorHandler);

(async () => {
  await database.sequelize.sync();
  server.listen(port, () => console.log(`server connection: port ${port}`));
})();

module.exports = { server, database };
