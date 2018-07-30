<template>
  <div class="header_box" :class="{active:isActive}">
    <div class="header_reight_box" v-for="n in post_data.header02">
      <i class="iconfont icon-jiantou4 header_prev"></i>
      <p class="place">{{n.hea_tit}}</p>
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
</template>

<script>
    export default {
        name: "post_header_top",
      props:["post_data","isActive"],
    }
</script>

<style scoped>
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
    z-index: 11;
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
    text-align: center;
    font-size:0.12rem;
  }
  .header_xiangji{
    font-size: 0.16rem;
  }
  .active{
    color:black !important;
    position: fixed;
    top:0;
    transtion:all 0.5;
    background: rgb(27,169,186);
  }
</style>
