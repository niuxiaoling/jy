<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="header">
                    <div class="header-box">
                        <div class="header-left">
                            <div class="header-logo">
                                <router-link to="/">
                                    <img src="../../assets/images/zk_logo.png" alt="">
                                </router-link>
                            </div>
                            <span class="storecenter">{{htmltype.htmltitle}}</span>
                        </div>
                        <div class="header-right">
                            <router-link to="/login">
                                <div>{{htmltype.regtologin}}</div>
                            </router-link>
                            
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props:['htmltype'],
    data (){
        return{
        }
    }
}
</script>
<style lang="scss" scoped>
  .header {
        width: 100%;
        height: 60px;
        background: #000;
        .header-box{
            width: 100%;
            height: 100%;
            .header-logo{
                float: left;
                padding-left: 20px;
                img{
                    height:60px;
                }
            }
            .storecenter{
                line-height: 60px;
                margin-left: 20px;
            }
        }
        
        .header-left{
            float: left;
            color: #fff;
            // line-height: 60px;
        }
        .header-right{
            color: #fff;
            float:right;
            padding:0 20px;
            line-height: 60px;
            a{
                color: #fff;
            }
        }
    }
</style>
