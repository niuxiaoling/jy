import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
//提交dispatch,通过action调用封装好的axios然后出发mutation来提交状态该表state的数据，然后在组件的coputed获取state

Vue.use(Vuex)

const state = {
    useMock : true, //是否用mock数据
    options: [],
    vipmember:'',  //验证vip身份
    activeIndex: '/person/person-order',
}
//类似computed计算state的状态
const getter =  {
    
}
const store =  new Vuex.Store({
    state,
    mutations,
    actions,
    getter
})
export default store;