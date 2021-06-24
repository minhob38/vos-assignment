const errorHandler = (err, ctx) => {
  ctx.status = err.status || 500;

  const message = ctx.status === 500
    ? "Internal Server Error"
    : err.message;

  ctx.type = "application/json";

  ctx.body = {
    status: ctx.status,
    error: message,
  };
};

module.exports = errorHandler;
