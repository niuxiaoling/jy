<template>
    <el-row class="topbar_container">
        <el-col :span="24">
            <!-- header -->
            <div class="topbar-header clearfix">
                <div class="header-logo">
                    <router-link to="/">
                        <img src="../assets/images/zk_logo.png" alt="">
                    </router-link>
                </div>
                <div class="header-menu">
                    <el-menu :default-active="activeIndex"  class="el-menu"  mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title"><i class="iconfont icon-lvyou"></i>模板市场</template>
                        <router-link to="/market">
                            <el-menu-item index="1-1">
                                人群画像
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-edit"></i>人群画像</template>
                        <el-menu-item index="2-1">定制画像</el-menu-item>
                    </el-submenu>
                </el-menu>
                </div>
                <div class="header-account">
                    <div class="addvip" @click="openvip">加入vip会员</div>
                    <i class="el-icon-edit"></i>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            易卖东西专卖店<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/person/person-center">
                                        <div ><span style="color: #555;font-size: 14px;">个人中心</span></div>
                                </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/person/person-order">
                                        <div ><span style="color: #555;font-size: 14px;">我的订单</span></div>
                                </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="person-library">
                                        <div ><span style="color: #555;font-size: 14px;">我的模板库</span></div>
                                </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div  @click="logoout"><span style="color: #555;font-size: 14px;">退出账号</span></div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>

            <div class="breadcrumb-container" v-if="this.$route.path !== '/market'">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            
            <!-- content -->
            <div class="container-wrapper">
                <transition mode="out-in" name="fade" >
                    <router-view></router-view>    
                </transition>
            </div>
        </el-col>
    </el-row> 
</template>
<script>
import Api from '../api/user.js'
export default {
    data (){
        return{
            activeIndex: '1',
        }  
    },
    mounted (){ 
    },
    methods:{
        handleSelect(key, keyPath) {
        
        },
        logoout:function(){
             Api.loginout().then( res=>{
                if(res.code=="0"){
                    this.$router.push('/login');
                }
             })
        },
        openvip:function(){
            this.$router.push('/vipmemeber')
        }
    }
}
</script>
<style scoped lang="scss">
    .topbar_container{
        position: absolute;
        top:0;
        bottom:0;
        width: 100%;
        .topbar-header{
            width: 100%;
            background: #545C63;
            height:60px;
            .header-logo{
               float: left;
               height: 100%;
            }
            .header-menu{
               float: left;
               height: 100%;
            }
            .header-account{
                float: right;
                line-height: 60px;
                color: #fff;
                padding-right:20px;
            }
        }
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .header-logo{
        position: relative;
        margin:0 1rem;  
        img{
           width:9rem;
           height:100%;
        }
    }
    .breadcrumb-container{
        width: 100%;
        background: #fff;
        height:30px;
        line-height: 30px;
        box-shadow: 0 1px rgba(0,0,0,.5)
    }
    .addvip{
        display: inline-block;
        color:#199AFC;
        cursor: pointer;
        margin-right:20px;
    }
    a:hover{
        text-decoration: none
    }
</style>
