const Koa = require("koa");
const Router = require("koa-router");
const logger = require('koa-logger')
require("dotenv").config();

const api = require("./src/api");
const db = require("./database/models")

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

app.use(logger());

router.use(api.routes());
app.use(router.routes());

db.sequelize.sync().then((req) => console.log("model is synchronized with db"));
app.listen(port, ()=> console.log(`server connection: port ${port}`));

const iconv  = require("iconv-lite");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const result = [];

fs.createReadStream(path.join(__dirname, "/assets/test.csv"))
  .pipe(iconv.decodeStream("EUC-KR"))
  .pipe(csv({}))
  .on("data",(data) => {
    result.push({
      "pnu": data["고유번호"],
    })
  })
  .on("end", () => {console.log(result)})
