const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
require("dotenv").config();

const api = require("./src/router/api");
const db = require("./database/models");

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

app.use(logger());

router.use(api.routes());
app.use(router.routes());

app.on("error", (err, ctx) => {
  let message = err.message;

  ctx.status = err.status || 500;

  if (ctx.status === 500) {
    message = "Internal Server Error";
  }

  ctx.body = `${message} / ${ctx.status}`;
});

db.sequelize.sync().then(() => console.log("model is synchronized with db"));
app.listen(port, () => console.log(`server connection: port ${port}`));
