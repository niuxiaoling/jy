<template>
    <div>
        <div class="niu_div_tab">
            <el-tabs v-model="activeIndex" type="card" @tab-click="tabClick" >
                <div v-for="(v,index) in list" :key="index">
                    <el-tab-pane :label="v.name" :name="v.second">
                            
                    </el-tab-pane>
                </div>
            </el-tabs>
        </div>
        <div class="niu_div_tabcontent">
              <router-view />
        </div>
    </div>
   
</template>
<script>
export default {
    data(){
        return{
            activeIndex:'1',
            list:[
                {id:1,name:'个人中心',key:'first'},{id:2,name:'我的订单',key:'second'}
            ],
        }
    },
    mounted(){
    },
    methods:{
        tabClick(tab) {
             let path = this.activeIndex;
             this.$router.push({path: path});
        }
    },
    computed:{
        getter:{
            
        }
        // options () {
        //     return this.$store.state.options;
        // },
        // activeIndex: {
        // get () {
        //     return this.$store.state.activeIndex;
        // },
        // set (val) {
        //     this.$store.commit('set_active_index', val);
        // }
        // }
    }
}
</script>
<style scoped>

</style>