<template>
    <div class="bg">
        <div class="login">
            <login-header :htmltype="htmltype"></login-header>
            <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="0px" class="accountform ">
                <h3 class="title">账号登录</h3>
                <el-form-item prop="username">
                    <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>
                <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
                </el-form-item>
                <el-form-item >
                    <div class="login-forget">
                        <router-link to="/forgetpwd">忘记密码?</router-link>
                        <router-link to="/register">立即注册</router-link>
                    </div>
                    <div></div>
                </el-form-item >
            </el-form>
        </div>   
        <vue-particles
             color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        ></vue-particles>
    </div>
</template>
<script>
import loginHeader from './Login/LoginHeader.vue'
import Api from '../api/user'
export default {
    name:'login',
    components: { 'login-header': loginHeader,},
    data (){
        return{
            htmltype:'极易数据通欢迎您',
            loading:false,
            account: {
                username: '17607190392',
                pwd: '123456'
            },
            rules: {
                username: [
                    {required: true, message: '请输入账号', trigger: 'blur'},
                    //{ validator: validaePass }
                ],
                pwd: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    //{ validator: validaePass2 }
                ]
            },
            checked: true,
            data:''
        }
    },
    methods:{
        handleLogin(){
            let that = this;
            this.$refs.AccountFrom.validate((valid)=>{
                if(valid){
                    this.loading = true;
                     let loginParams = {username: this.account.username, pwd: this.account.pwd};
                    Api.login(loginParams).then( res => {
                        this.loading = false;
                        if(res){
                            localStorage.setItem('user',JSON.stringify(res));
                            this.$router.push({path:'/'})
                        }else{
                            console.log(1);
                        }
                    },function(err){
                        that.loading = false;

                    }).catch(function(err){
                        console.log(err);
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    #app,body{
        height: 100%;
    }
    .bg{
        position: relative;
        height: 100%;
        background-image: url('../assets/images/sky.jpg');
        background-size: cover;
        z-index:0;
        #particles-js{
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
    .login{
        height: 100%;
    }
    .accountform{
        position: relative;
        z-index: 100;
        width: 350px;
        margin:160px auto;
        background: #fff;
        padding:35px 35px 15px 35px;
        box-shadow: 0 0 25px #cac6c6;
        .title{
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }
    }
    .login-forget{
        display: flex;
        justify-content: space-between;
        a{
            color:#333;
        }
    }
   
   
</style>
