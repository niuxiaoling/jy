<template>
    <div class="register-container">
        <login-header :htmltype="htmltype"></login-header>
        <step :type="type"></step>
    </div>
</template>
<script>
    import loginHeader from './LoginHeader.vue'
    import step from './Step.vue'
    export default {
        name:'register',
        components: {
             'login-header': loginHeader,
             "step":step
        }, 
        data(){
            return{
                htmltype:{
                    htmltitle:'欢迎注册，极易数据通系统',
                    regtologin:'已有账号？请登录'
                },   
                type:'register', 
                pageNo: 1,
                pages: 100
            }
        },
        methods:{
            pageList:function(curPage) {
                //根据当前页获取数据
                this.pageNo = curPage;
                console.log("当前页：" + this.pageNo);
             }
        }
    }
</script>
<style lang="scss" scoped>
    .register-container{
        position: relative;
    }
</style>
