const Koa = require("koa");
require("dotenv").config();

const app = new Koa();
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`server connection: port ${port}`));
