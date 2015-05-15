var koa = require('koa')

var app = koa();

app.use(function *(){
	this.body = 'Comming Soon...';
})

app.listen(1234)