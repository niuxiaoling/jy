import axios from 'axios'
import qs from 'qs'


axios.defaults.timeout = 5000
axios.defaults.baseURL =""
//http请求拦截器
axios.interceptors.request.use(
    config => {
        // const token  = getCookie('名称');  //js-cookies
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        // if(token){
        //     config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
// http response拦截器
axios.interceptors.response.use(
    response => {
        // if(response.data.errCode ==2){
        //     router.push({
        //      path:"/login",
        //      querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        //     })
        // }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)
//封装get方法
export function get(url,params = {}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err);
        })
    })
}
//封装post方法
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err);
            })
    })
}
//封装patch方法
export function patch(url,data = {}){
    return new Promise((resolve,reject) =>{
        axios.patch(url,qs.stringify(data))
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err);
            })  
    })
}

//封装put方法
export function put(url,data={}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err);
            })
    })
}


export function Delete(url,data = {}){
    return new Promise((resovle,reject) =>{
        axios.delete(url,data)
            .then(res=>{
                resolve(res.data);
            },err=>{
                reject(err);
            })
    })
}
