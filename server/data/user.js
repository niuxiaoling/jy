//虚拟用户数据
const Mock = require('mockjs');
Mock.mock('/api/login','post',function(){
  return {
        user:[ {
          id: 1,
          username: '17607190392', //用户名
          name: "niu", //姓名
          tel:'17607190392',
          pwd: '123456', //密码
          email: '17607190392@163.com', //邮箱
          nickname: '超级管理员', //昵称
          sex: 1, //性别
          addr: '晋中'
        },
        {
            id: 2,
            username: '15527131124',
            name: "niu", //姓名
            pwd: '123123',
            tel:'15527131124',
            email: '10@qq.com',
            nickname: '普通管理员',
            sex: 1, //性别
            addr: '北京市海淀区'
        }
    ]
  }
});
