<template>
    <div>
      <div class="hsmallBox">
        <div class="hsmallBoxIn">
          <div class="hsmallBoxOne">
            <ul class="frontage">
              <li>
                <p class="frontBg"></p>
                <p><span class="hnews">New Users</span><span class="hnum">3,659</span></p>
              </li>
              <li> <span>This month plan % </span> <span class="hpercent">84%</span></li>
              <li>
                <span class="progressL"></span><span  class="progressR"></span>
              </li>
            </ul>
            <ul class="reverse ">
              <a href="#">
                <i class="iconfont icon-barcharto"></i>
                <span>Check Summary</span>
              </a>
            </ul>
          </div>
        </div>
        <div class="hsmallBoxIn">
          <div class="hsmallBoxOne">
            <ul class="frontage">
              <li>
                <p class="frontBg"></p>
                <p><span class="hnews">New Users</span><span class="hnum">3,659</span></p>
              </li>
              <li> <span>This month plan % </span> <span class="hpercent">84%</span></li>
              <li>
                <span class="progressL"></span><span  class="progressR"></span>
              </li>
            </ul>
            <ul class="reverse ">
              <a href="#">
                <i class="iconfont icon-barcharto"></i>
                <span>Check Summary</span>
              </a>
            </ul>
          </div>
        </div>
        <div class="hsmallBoxIn">
          <div class="hsmallBoxOne">
            <ul class="frontage">
              <li>
                <p class="frontBg"></p>
                <p><span class="hnews">New Users</span><span class="hnum">3,659</span></p>
              </li>
              <li> <span>This month plan % </span> <span class="hpercent">84%</span></li>
              <li>
                <span class="progressL"></span><span  class="progressR"></span>
              </li>
            </ul>
            <ul class="reverse ">
              <a href="#">
                <i class="iconfont icon-barcharto"></i>
                <span>Check Summary</span>
              </a>
            </ul>
          </div>
        </div>
        <div class="hsmallBoxIn">
          <div class="hsmallBoxOne">
            <ul class="frontage">
              <li>
                <p class="frontBg"></p>
                <p><span class="hnews">New Users</span><span class="hnum">3,659</span></p>
              </li>
              <li> <span>This month plan % </span> <span class="hpercent">84%</span></li>
              <li>
                <span class="progressL"></span><span  class="progressR"></span>
              </li>
            </ul>
            <ul class="reverse ">
              <a href="#">
                <i class="iconfont icon-barcharto"></i>
                <span>Check Summary</span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "smallPic"
    }
</script>

<style scoped>
  .hsmallBox{
    display: -webkit-flex;
    -webkit-justify-content:center;
    width:100%;
    flex-wrap: wrap;
    height:100%;
  }
  .hsmallBoxIn{
    padding:0 12px;
    box-sizing: border-box;
    width:25%;
    height:123px;
  }
  .hsmallBoxOne{
    position:relative;
    border-radius:5px;
  }
  .hsmallBoxOne:hover .frontage{
    transform: rotateY(180deg);
  }

  .hsmallBoxOne:hover .reverse{
    transform: rotateY(360deg);
    opacity: 1;
  }

  .hsmallBoxIn:nth-child(2) .frontage{
    background-color: #418bca;;;
  }
  .hsmallBoxIn:nth-child(3) .frontage{
    background-color: #16a085;;
  }
  .hsmallBoxIn:nth-child(4) .frontage{
    background-color: #3f4e62;;
  }
  .hsmallBoxOne .frontage{
    width:100%;
    height:123px;
    box-sizing:border-box;
    position:absolute;
    left:0px;
    top:0px;
    transition: all 0.5s;
    transform-style: preserve-3d;
    backface-visibility:hidden;
    background-color: #d9544f;
    z-index:100;
    border-radius:5px;
    padding: 15px;
  }
  .hsmallBoxOne .frontage li:nth-child(1){
    display: -webkit-flex;
    margin-bottom:10px;
  }
  .hsmallBoxIn:nth-child(1) .frontage li:nth-child(1) .frontBg{
    width:50px;
    height:50px;
    display: inline-block;
    background: url(../../assets/img/white.png) no-repeat left center;
  }
  .hsmallBoxIn:nth-child(2) .frontage li:nth-child(1) .frontBg{
    width:50px;
    height:50px;
    display: inline-block;
    background: url(../../assets/img/car.png) no-repeat left center;
  }
  .hsmallBoxIn:nth-child(3) .frontage li:nth-child(1) .frontBg{
    width:50px;
    height:50px;
    display: inline-block;
    background: url(../../assets/img/$.png) no-repeat left center;
  }
  .hsmallBoxIn:nth-child(4) .frontage li:nth-child(1) .frontBg{
    width:50px;
    height:50px;
    display: inline-block;
    background: url(../../assets/img/eye.png) no-repeat left center;
  }
  .hsmallBoxOne .frontage li:nth-child(1) p{
    display: -webkit-flex;
    -webkit-flex-direction:column;
    padding-left:5px;
  }
  .hnews{
    text-transform: uppercase;
    font-size:12px;
    color: rgba(255, 255, 255, 0.5);
    margin-top:5px;
  }
  .hnum{
    color:white;
    font-size:30px;
    font-family: "Roboto", "Arial", sans-serif;
  }
  .hsmallBoxOne .frontage li:nth-child(2){
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    display: -webkit-flex;
    -webkit-justify-content:space-between;
  }
  .hsmallBoxOne .hpercent{
    text-align:center;
    border-radius:3px;
    color: white;
    display: inline-block;
    width:36px;
    line-height:23px;
    background-color: rgba(0, 0, 0, 0.1)
  }
  .hsmallBoxOne .frontage li:nth-child(3){
    width:100%;
    height:5px;
    margin-top:-12px;
    margin-bottom:12px;
  }
  .hsmallBoxOne .frontage li:nth-child(3) .progressL{
    width:70%;
    height:5px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.15);
    border-top-left-radius:2px;
    border-bottom-left-radius:2px;
  }
  .hsmallBoxOne .frontage li:nth-child(3) .progressR{
    width:17%;
    height:5px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.08);
    border-top-right-radius:2px;
    border-bottom-right-radius:2px;
  }
  .reverse{
    height:123px;
    border-radius:5px;
    width:100%;
    box-sizing:border-box;
    position: absolute;
    top:0px;
    left:0px;
    background-color: white;
    padding: 15px 30px 8px 30px;
    text-align: center;
    transition: all 0.5s;
    transform-style: preserve-3d;
    backface-visibility:hidden;
    z-index:0;
  }
  .reverse a{
    display:-webkit-flex;
    -webkit-flex-direction:column;
  }
  .reverse a span{
    color: #717171;
    font-size: 18px;
    line-height:30px;
  }
  .reverse a i{
    color: #717171;
    font-size: 64px;
  }
  .reverse a:hover i{
    color:#428bca;
    cursor:pointer;
  }
  .reverse a:hover span{
    color:#428bca;
    cursor:pointer;
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
