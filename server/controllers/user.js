
const Users = require('../data/user'); //获取数据

let userController = {};  //定义控制器

let _Users = Users;
//用户登录
userController.login = function (req, res) {
   console.log(req.body);
    let username = _.trim(req.query.username || req.body.username || '');
    let pwd = req.body.pwd;
    console.log(username,pwd);
    return res.json({"error":'错误'})
    // if (!username || !pwd) {
    //   return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
    // }
  
    // // 通过用户名获取到用户信息
    // let user = _.find(_Users, function (u) {
    //   return u.username === username;
    // });
    // console.log('---_Users----');
    // console.log(_Users);
    // if (!user) {
    //   return res.json({"errcode": 40003, "errmsg": "用户不存在"});
    // }
    // if (user.password === pwd) {
    //   //设置session
    //   req.session.userId = user.id;
  
    //   return res.json({
    //     id: user.id,
    //     username: user.username,
    //     nickname: user.nickname,
    //     name: user.name,
    //     email: user.email
    //   });
    // } else {
    //   return res.json({"errcode": 40004, "errmsg": "密码错误"});
    // }
  };

  userController.loginout =function(req,res){
      res.json({"code":0,"msg":"退出成功"})
  }

module.exports = userController;