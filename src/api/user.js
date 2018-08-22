import { get,post,patch,put } from '../utils/api'//封装axios
export default {
    //登录
    login:params =>{
        return post('/api/v1/user/login',params)
    },
    //登出
    loginout:params =>{
        return get('/api/v1/user/loginout',params)
    }
}