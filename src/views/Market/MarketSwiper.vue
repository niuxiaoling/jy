<template>
    <div class="swiper-container">
        <el-carousel height="280px">
            <el-carousel-item v-for="item in 4" :key="item" interval="5000">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>    
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .market-container{
        width: 100%;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
<style>
    .el-carousel{
        width: 100%;
    }
</style>

