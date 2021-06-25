const notFoundCtrl = (ctx, next) => {
  ctx.status = 404;
  ctx.type = "application/json";
  ctx.body = {
    status: ctx.status,
    error: "Not Found",
  };
};

module.exports = notFoundCtrl;
