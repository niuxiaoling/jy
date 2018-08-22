<template>
     <div>
         用户名：{{username}}
         <div><input type="text" v-model="username">/></div>
         <button @click="setname">确认修改</button>
     </div>
</template>
<script>
export default {
    data (){
        return{
            username:''
        }
    },
    methods:{
        setname(){
            
        }
    }
}
</script>
<style scoped>

</style>