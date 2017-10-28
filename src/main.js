import Koa from 'koa'

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa1';
});


app.listen(3000);