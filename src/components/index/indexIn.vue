<template>
    <div>
      <div class="hcRight">
        <!--右侧头部信息-->

        <div class="hTheme">
          <!-- 主体段 -->
          <div class="themeLeft">
            <h3>qunar</h3>
            <span>// Place subtitle here...</span>
          </div>
          <ul class="themeRight">
            <li><a href="#"> You are here</a> <span>></span></li>
            <li><a href="#">Minimal</a><span>></span></li>
            <li><a href="#"> Dashboard</a></li>
          </ul>
        </div>
        <!--小图部分-->
        <small-pic></small-pic>
        <!--echart图标部分-->
        <h-statistic></h-statistic>
      </div>
    </div>
</template>

<script>
  import SmallPic from "./smallPic";
  import HStatistic from "./hStatistic";
    export default {
        // name: "indexIn",
      components: {HStatistic, SmallPic}
    }
</script>

<style scoped>.hContent{
  width:100%;
  display: -webkit-flex;

}
.hContent .hcLeft{
  width:20%;
}

/* 主页开始 */
.hContent .hcRight{
  width:80%;
  height:100%;

}

.hTheme{
  display: -webkit-flex;
  padding-left:10px;
  padding-right:20px;
  -webkit-justify-content:space-between;

}
.themeLeft{
  /* width:100%; */
  padding-left:50px;
  background:url(../../assets/img/theme.png) no-repeat left center;
}
.themeLeft h3{
  display: inline-block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 32px;
  line-height:84px;
}
.themeLeft span{
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}
.themeRight{
  line-height:30px;
  display: -webkit-flex;

}
.themeRight li:nth-child(1) a{
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}
.themeRight li:nth-child(2) a{
  font-size: 12px;
  color: #428bca;
}
.themeRight li:nth-child(3) a{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}
.themeRight span{
  font-family: "FontAwesome";
  color: rgba(255, 255, 255, 0.6);
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
