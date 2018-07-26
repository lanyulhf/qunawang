<template>
    <!--景点头部-->
    <div class="header">
        <div class="header_left">
          <div class="header_box">
            <div class="header_reight_box">
              <i class="iconfont icon-jiantou4 header_prev"></i>
              <p class="place">上海</p>
              <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
            </div>
            <div class="input_box">
              <i class="iconfont icon-sousuo header_sousuo"></i>
              <input type="text" placeholder="城市/景点">
            </div>
            <div class="xianji_box">
              <i class="iconfont icon-xiangji header_xiangji"></i>
              <span>发旅图</span>
            </div>
          </div>
          <a class="jinru">点击进入上海旅图>></a>
          <div class="banyuan">
            <img src="../../assets/img/post/banyuan.png" alt="">
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post_header"
    }
</script>

<style scoped>
  .header{
    width:100%;
    height: 1.71rem;
    background: url("../../assets/img/post/header_bj.jpg") no-repeat;
    background-size: cover;
  }
  .header_left{
    width:100%;
    height: 1.71rem;
    background: -webkit-linear-gradient(235deg,transparent 0,rgba(0,0,0,0.6) 100%);
    position: relative;
  }
  .header_reight_box{
    display: flex;
    align-items: center;
  }
  .header_box{
    width: 100%;
    height:0.45rem;
    padding:0 0.21rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_prev{
    font-size: 0.16rem;
    z-index: 5;
    font-weight: bold;
    color:#ffffff;
  }
  .place{
    font-size: 0.17rem;
    color:#ffffff;
    margin:0 0.07rem 0 0.1rem;
  }
  .header_sanjiao{
    font-size: 0.15rem;
    color:#ffffff;
  }
  .input_box{
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
    position: relative;
  }
  .input_box input{
    width:1.97rem;
    height: 0.27rem;
    border:none;
    outline: none;
    border-radius: 13px;
    text-indent: 0.29rem;
  }
  .header_sousuo{
    font-size: 0.16rem;
    position: absolute;
    text-indent: 0.07rem;
    color: #969696;
  }
  .xianji_box{
    display: flex;
    flex-direction: column;
    color: #f6f7f6;
  }
  .header_xiangji{
    font-size: 0.16rem;
  }
  .xianji_box span{
    font-size: 0.12rem;
  }
  .jinru{
    font-size: 0.12rem;
    color: #f8fbfc;
    margin-top:0.79rem;
  }
  .banyuan{
    width:100%;
    height: 0.16rem;
    display: flex;
    position: absolute;
    bottom:0;
    left:0;
  }
  .banyuan img{
    width:100%;
    height: 0.16rem;
  }
</style>
