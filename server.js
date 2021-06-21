const Koa = require("koa");
const Router = require("koa-router");
const logger = require('koa-logger')
require("dotenv").config();

const api = require("./src/api");

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

app.use(logger());

router.use(api.routes());
app.use(router.routes());

app.listen(port, ()=> console.log(`server connection: port ${port}`));
