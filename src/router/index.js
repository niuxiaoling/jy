import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
 //注册
 const Register = resolve => require(['@/views/Login/Register'],resolve)
 //公共头部
 const Home = resolve => require(['@/views/Home'],resolve)
 //登录页
 const Login = resolve =>require(['@/views/Login'],resolve)
 //忘记密码
 const ForgetPwd = resolve =>require(['@/views/Login/ForgetPwd'],resolve)
 //人像市场
 const Market = resolve =>require(['@/views/Market'],resolve)
 //vip
 const Vipmember = resolve =>require(['@/views/Vipmember'],resolve)
 //收银台
 const Cashier = resolve =>require(['@/views/Cashier'],resolve)
 const PersonCommon = resolve =>require(['@/views/Person/PersonCommon'],resolve)
 //个人中心
 const PersonCenter = resolve => require(['@/views/Person/PersonCenter'],resolve)
 //我的订单
 const PersonOrder= resolve => require(['@/views/Person/PersonOrder'],resolve)
 //我的资源库
 const personLibrary=  resolve => require(['@/views/Person/personLibrary'],resolve) 


 let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta:{ }
    },
    {
      path:'/forgetpwd',
      name:'forgetpwd',
      component: ForgetPwd
    },
    {
      path:'/',
      name:'market',
      redirect:'/market',
      component: Home,
      children: [
        {
          path:'market',
          iconCls:'iconfont icon-icon_bijiben',
          component:Market,
          name:'人群画像',
        },
        {
          path:'vipmemeber',
          name:'加入vip会员',
          component:Vipmember
        },
        {
          path:'cashier',
          name:'收银台',
          component:Cashier
        }
      ]
    },
    {
      path:'/',
      name:'',
      component: Home,
      children:[
        {
          path:'person',
          iconCls:'iconfont icon-icon10',
          name:'person',
          component:PersonCommon,
          children:[
            {
              path:'person-center',
              iconCls:'iconfont icon-icon10',
              name:'个人中心',
              show:'first',
              component:PersonCenter,
            },
            {
              path:'person-order',
              iconCls:'iconfont icon-icon10',
              name:'我的订单',
              show:'second',
              component:PersonOrder,
            },
            {
              path:'person-library',
              iconCls:'iconfont icon-icon10',
              name:'我的模板库',
              show:'third',
              component:personLibrary,
            }
          ]
        }
        
      ]
    }
  ]
})

Vue.use(Router)
// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to,from,next)=>{
    NProgress.start();
    next();
    // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
    // if (to.path === '/login'&& localStorage.token) {
    //   window.localStorage.removeItem('access-user')
    //   next()
    // } else {
    //   let user = JSON.parse(window.localStorage.getItem('access-user'))
    //   if (!user) {
    //     next({path: '/login'})
    //   } else {
    //     next()
    //   }
    // }
 })

router.afterEach((to,from)=>{
  NProgress.done();
})



export default router;