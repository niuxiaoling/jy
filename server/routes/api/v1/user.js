// user相关路由

var express = require("express");
var router = express.Router();
var indexRouter = {};
var userControllar = require('../../../controllers/user');

//用户登录
router.post('/login',userControllar.login)

//用户登出
router.get('/loginout',userControllar.loginout)

indexRouter.router = router;

module.exports = indexRouter