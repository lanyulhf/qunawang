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
        <div class="chartBox" id="animationChart1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StatisticBotRig",
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        var myChart = this.$echarts.init(document.getElementById('animationChart1'));

        // 基于准备好的dom，初始化echarts实例

        var  option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            textStyle:{
              color:"#fffeff", //刻度颜色
              fontSize:10 //刻度大小
            },
            orient: 'vertical',
            x: '218',
            y:"20%",
            data:['12-40分','40-60分','60-80分','80分以上']
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '74%'],
              center: ['35%', '50%'],
              label: {
                normal: {
                  position: 'inner'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle:{
                borderWidth:0, //设置border的宽度有多大
                borderColor:'#fff',
                normal: {
                  label: {
                    show: true,
                    position : 'inner',
                    formatter : function (params) {
                      return (params.percent - 0).toFixed(0) + '%'//显示百分比，但是将原有的字替换
                    }
                  },
                  labelLine: {
                    show: false,
                  }
                }
              },
              data:[
                {value:8, name:'12-40分', selected:true},
                {value:12, name:'40-60分', selected:true},
                {value:20, name:'60-80分', selected:true},
                {value:60, name:'80分以上'}
              ]
            },
            {
              name:'访问来源',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },

            }
          ],
          color: ['rgb(255,240,255)','rgb(255,200,255)','rgb(255,160,255)','rgb(255,140,240)']
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
