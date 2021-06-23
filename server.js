const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
require("dotenv").config();

const api = require("./src/api");
const db = require("./database/models");

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

app.use(logger());

router.use(api.routes());
app.use(router.routes());

db.sequelize.sync().then(() => console.log("model is synchronized with db"));
app.listen(port, () => console.log(`server connection: port ${port}`));
