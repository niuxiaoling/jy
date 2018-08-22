<template>
    <div>
        <login-header :htmltype="htmltype"></login-header>
        <step :type="type"></step>
    </div>
</template>
<script>
    import loginHeader from './LoginHeader.vue'
    import step from './Step.vue'
    export default {
        components:{ 'login-header':loginHeader,'step':step },
        data(){
            return{
                htmltype:'忘记密码',
                type:'forgetpwd'    
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
