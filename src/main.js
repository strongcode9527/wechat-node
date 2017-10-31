import Koa from 'koa'
import  mongoose from 'mongoose'
import User from './models/user'

const mongoUrl = 'mongodb://localhost:27017/wechat'

//连接数据库
mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  const user = new User({userName: 'strong', password: '123456'})
  user.save()
});

const app = new Koa();




// response
app.use(ctx => {
  ctx.body = 'Hello Koa1'
});


app.listen(3000);