// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' //必须在最开始引入垫片
import Vue from 'vue' 
import App from './App' //主页面
import router from './router'  //路由
import echarts from 'echarts'  //图表
import ElementUi from 'element-ui' //element-ui
import 'element-ui/lib/theme-chalk/index.css' //element-ui style
import '@/assets/iconfont.css'//iconfont
import '@/assets/styles/main.scss'//公共样式
import { get,post,patch,put } from './utils/api'//封装axios
import store from  './store'   //状态管理
import VueParticles from 'vue-particles'


Vue.use(ElementUi)
Vue.use(VueParticles)
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
