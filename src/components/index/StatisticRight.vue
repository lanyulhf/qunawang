<template>
<div>
  <div class="StatisticRight">
    <div class="StatisticRightIn">
      <div class="htitle">
        <h3>Server <span class="speSpan">Load</span></h3>
        <div class="hClose">
          <a href="#"><i class="iconfont icon-fa-refresh"></i></a>
          <a href="#"><i class="iconfont icon-searchclose"></i></a>
        </div>
      </div>
      <div class="progress">
        <div class="hnum">
          <h3><i class="iconfont icon-fa-hdd-o"></i><span>394 GB</span></h3>

        </div>
        <div class="bgTwo"> <span></span><span></span></div>
        <p class="txtCon">
          394GB  used of 2,048GB  on File Server
        </p>
      </div>
      <div class="chartBox" id="animationChart">
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "StatisticRight",
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine() {
          var myChart = this.$echarts.init(document.getElementById('animationChart'));

          // 指定图表的配置项和数据
          var xAxisData = [];
          var data1 = [];
          var data2 = [];
          for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
          }

          var option = {
            title: {
              text: '柱状图动画延迟',
              textStyle:{
                color:"#fff", //刻度颜色
                fontSize:10  //刻度大小
              }
            },
            legend: {
              // data: ['bar', 'bar2'],
              align: 'left'
            },
            toolbox: {
              // y: 'bottom',
              feature: {
                magicType: {
                  type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                  pixelRatio: 2
                }
              }
            },
            tooltip: {},
            xAxis: {
              data: xAxisData,
              silent: false,
              splitLine: {
                show: false
              },
              axisLabel:{
                textStyle:{
                  color:"#fff", //刻度颜色
                  fontSize:10 //刻度大小

                }
              },
              axisLine:{
                lineStyle:{
                  color:'#fff',
                  width:1,   //这里是坐标轴的宽度,可以去掉
                }
              }
            },
            yAxis: {
              axisLabel:{
                textStyle:{
                  color:"#fff", //刻度颜色
                  fontSize:10 //刻度大小
                }
              },
              axisLine:{
                lineStyle:{
                  color:'#fff',
                  width:1,   //这里是坐标轴的宽度,可以去掉
                }
              }

            },
            series: [

              {
                // name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                  return idx * 10 + 100;
                }
              }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
              return idx * 5;
            }
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        }
      }
    }
</script>

<style scoped>
  .StatisticRight{
    width:33%;
    height:100px;
    padding:15px;
  }
  .StatisticRightIn{
    border-radius:5px;
    padding:15px;
    background: rgba(0, 0, 0, 0.3);
    width:350px;
  }
  .hStatistic .StatisticRight .htitle{
    padding-bottom:15px;
    display:-webkit-flex;
    -webkit-justify-content:space-between;
    font-size: 22px;
    line-height: 28px;
    color:white;
    position:relative;
    font-weight:100 !important;
  }
  .StatisticRightIn .htitle .hClose{
    position:absolute;
    top:-17px;
    right:0px;
  }
  .StatisticRightIn .htitle .hClose a i{
    color: #f2f2f2;
    font-size: 12px;
    margin-left:5px;
  }
  .StatisticRightIn .speSpan{
    font-weight:100;
    font-size:16px;
  }
  .StatisticRightIn .chartBox{
    width:100%;
    height:190px;
  }
  .StatisticRightIn .progress{
    padding:15px;
  }
  .StatisticRightIn .progress .hnum{
    display:-webkit-flex;
    -webkit-justify-content:space-between;
  }
  .StatisticRightIn .progress .hnum span{
    font-size: 24px;
    font-weight:100;
  }
  .StatisticRightIn .progress .hnum h3{
    display:-webkit-flex;
  }
  .StatisticRightIn .progress .hnum h3 i{
    font-size: 24px;
    margin-right:5px;
  }

  .StatisticRightIn .progress .hnum .right{
    font-size: 12px;
    text-align:center;
    line-height:29px;
    border-radius:3px;
    width:36px;
    height:29px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .progress .bgTwo{
    height:5px;
    margin-top:-10px;
  }
  .progress .bgTwo span:nth-child(1){
    display: inline-block;
    width:42%;
    height:5px;
    line-height:5px;
    font-size:5px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .progress .bgTwo span:nth-child(2){
    display: inline-block;
    line-height:5px;
    width:58%;
    height:5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .progress .txtCon{
    font-size:12px;
    color:white;
    margin-top:15px;
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
