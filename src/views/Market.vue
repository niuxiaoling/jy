<template>   
    <div>
        <market-swiper></market-swiper>
        <div class="market-container">
            <h1>人群画像</h1>
        </div>
        
    </div> 
</template>
<script>
import MarketSwiper from './Market/MarketSwiper.vue'
export default {
    components:{'market-swiper':MarketSwiper},
    name:'market',
    data (){
        return {
        }
    },
    methods:{ 
        
    }

}
</script>
<style scoped lang="scss">
    .market-container{
        border-top:1px solid #000;
        padding:20px 30px;
    }
</style>
