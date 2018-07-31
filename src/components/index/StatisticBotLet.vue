<template>
  <div>
    <div class="hStatisticLeft">
      <div class="hStatisticLeftIn">
        <div class="htitle">
          <h3>hStatistic</h3>
          <div class="hClose">
            <a href="#"><i class="iconfont icon-fa-refresh"></i></a>
            <a href="#"><i class="iconfont icon-searchclose"></i></a>
          </div>
        </div>
        <div class="chartBox" id="main2" >

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'StatisticBotLet',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main2'))

        var option = {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },


          grid: {
            top:"15%",
            left: '2%',
            right: '6%',
            bottom: '3%',
            containLabel: true
          },
          xAxis:  {
            data: ['大陈镇','上溪镇','北苑街道','赤岸镇','后宅街道'],
            splitNumber:9,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:1,
                // border //这里是坐标轴的宽度,可以去掉
              }
            },
            axisLabel:{
              formatter:'{value} k',

              textStyle:{
                color:"#fff", //刻度颜色
                fontSize:14,//刻度大小
                //    interval:0
              },
            },

            splitLine:{
              show:false
            },

          },
          yAxis: {
            //   max:3,
            //
            type: 'category',
            data: ['20年以上','1到3年','3到10年','10到20年','20年以上'],
            axisLabel:{
              textStyle:{
                color:"#fff", //刻度颜色
                fontSize:12//刻度大小

              },
              interval:0
            },
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:1,   //这里是坐标轴的宽度,可以去掉
              }
            },

          },
          series: [
            {
              name: '搜索引擎',
              type: 'bar',
              stack: '总量',
              barGap:"50%",
              //   barCategoryGap:'20%',
              //   barBorderRadius:[10, 10, 10, 10],
              barWidth : 20,//柱图宽度


              label: {
                normal: {
                  show: false,
                  position: 'insideRight',
                  //   labelLine :{show:false}
                }
              },
              itemStyle:{
                normal:{
                  barBorderRadius:[0,4,4,0],
                  color: function(params) {
                    //首先定义一个数组
                    var colorList = [
                      '#ccc','#ffa','#ccc','#ffa','#ccc'
                    ];
                    return colorList[params.dataIndex]
                  },               　　　　　//以下为是否显示
                  label: {
                    show: false
                  }
                }
              },
              data: [35, 8, 12, 16, 40],

            },

          ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  /* hStatisticLeft部分 */
  .hStatisticLeft{
    width:60%;
    padding:15px;
    border-radius:5px;
  }
  .hStatisticLeftIn{
    width:570px;
    border-radius:5px;
    padding:15px;
    background: rgba(0, 0, 0, 0.3);
  }
  .hStatisticLeftIn .htitle{
    padding-bottom:15px;
    display:-webkit-flex;
    -webkit-justify-content:space-between;
    font-size: 22px;
    line-height: 28px;
    color:white;
    position:relative;
    font-weight:100 !important;
  }
  .hStatisticLeftIn .htitle .hClose{
    position:absolute;
    top:-17px;
    right:0px;
  }
  .hStatisticLeftIn .htitle .hClose a i{
    color: #f2f2f2;
    font-size: 12px;
    margin-left:5px;
  }
  .hStatisticLeftIn .chartBox{
    padding:15px;
    height:250px;
  }
</style>

