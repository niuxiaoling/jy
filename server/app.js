var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// 处理post请求使用中间件
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
// parse form-data 需要中间件connect-multiparty的支持
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
// parse text/xml
app.use(express.static('./public'));

//允许所有的请求方式
app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//所有通过接口相关的api都会通过api这个路由导向到具体的路由
app.use('/',index.router)   


module.exports = app;