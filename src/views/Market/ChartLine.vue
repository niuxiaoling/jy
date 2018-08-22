<template>
    <div class="chartLineContainer">
      <el-row>
         <el-col :span="12">
             <div id="myChart" :style="{width:'600px',height:'400px'}"></div>
         </el-col>
      </el-row>
      
    </div>
    
</template>

<script>
  // 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted (){
    this.chartLine();
  },
  methods: { 
     chartLine (){
        var myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
     .chartLineContainer{
       width: 100%;

     }
</style>
