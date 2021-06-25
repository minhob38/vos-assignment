const Koa = require("koa");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const http = require("http");
require("dotenv").config();

const database = require("./database/models");
const apiRouter = require("./src/router/apiRouter");
const errorHandler = require("./src/router/controller/errorHandler.controller");
const notFoundCtrl = require("./src/router/controller/notFoundRouter.controller");

const app = new Koa();

const server = http.createServer(app.callback());
const port = process.env.PORT || 3000;

app.use(logger());

app.use(cors());

app.use(apiRouter.routes());
app.use(notFoundCtrl);

app.on("error", errorHandler);

(async () => {
  await database.sequelize.sync();
  server.listen(port, () => console.log(`server connection: port ${port}`));
})();

module.exports = { server, database };
