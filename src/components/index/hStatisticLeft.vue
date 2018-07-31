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
      <div class="chartBox" id="main" >

      </div>
    </div>
  </div>
</div>
</template>

<script>
  // import echarts from 'echarts/dist/echarts'
   /* export default {
        name: "hStatisticLeft",
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine() {

        }
        }
    }*/
  export default {
    name: 'hStatisticLeft',
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
        let myChart = this.$echarts.init(document.getElementById('main'))
        var option = {
          title: {
            text: '堆叠区域图',
            textStyle:{
              color:"#fff", //刻度颜色
              fontSize:10  //刻度大小
            }
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: 'red'
              }
            }
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
            textStyle: {color: '#fff'},
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['JAN','FEB','MAR','APR','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
              axisLabel:{
                textStyle:{
                  color:"#fff", //刻度颜色
                  fontSize:14  //刻度大小
                }
              },
              axisLine:{
                lineStyle:{
                  color:'#fff',
                  width:1,   //这里是坐标轴的宽度,可以去掉
                }
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel:{
                textStyle:{
                  color:"#fff", //刻度颜色
                  fontSize:12  //刻度大小
                }
              },
              axisLine:{
                lineStyle:{
                  color:'#fff',
                  width:1,   //这里是坐标轴的宽度,可以去掉
                }
              }
            }
          ],
          series : [

            {
              name:'直接访问',
              textStyle:{
                color:"#fff", //刻度颜色
                fontSize:12  //刻度大小
              },
              itemStyle: {
                normal: {
                  lineStyle: {
                    width:0.1// 0.1的线条是非常细的了
                  }
                }
              },
              type:'line',
              stack: '总量',
              areaStyle: {normal: {"color":"#ccc"}},
              data:[320, 332, 301, 434, 390, 430, 320,340,350,210,190,240]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color:"white",
                    width:2// 0.1的线条是非常细的了
                  },
                  color:"#fff"
                }


              },
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {"color":"transparent"}},
              data:[820, 932, 901, 934, 1290, 1330, 1320,1240,1240,1250,1210,1300]
            }
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
  @media screen and (max-width: 1200px){
    .hsmallBox .hsmallBoxIn{
      width: 50%;
      margin-bottom:24px;
    }

  }
  @media screen and (max-width: 760px){
    .hsmallBox .hsmallBoxIn{
      width: 100%;
      margin-bottom:24px;
    }
    .hTheme{
      -webkit-flex-direction:column;
      -webkit-justify-content:space-around;
    }
    .themeLeft{
      text-align: center;
    }
    .themeRight{
      text-align: center;
    }

  }
  @media screen and (max-width:760px){
    .hContent .hcRight{
      width:100%;
      height:100%;
    }
    .hContent .hcleft{
      width:10%;
      height:100%;
    }

  }
  @media screen and (max-width:1200px){
    .hStatistic .hStatisticLeft{
      width:100%;
      height:100%;
    }
    .hContent .StatisticRight{
      width:100%;
      height:100%;
    }

  }

</style>
