const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const KoaBody = require('koa-body');
const BodyParser = require('koa-bodyparser');
const app = new Koa();
var router = new Router();
app
  .use(Logger())
  .use(KoaBody())
  .use(BodyParser());

router.post('/harmony/hooks/completed', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = {status: 'ok'};
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3200);
