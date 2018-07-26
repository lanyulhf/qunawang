<template>
    <div class="service">
        <span class="null"></span>
        <p class="switch">
            <span class="switch1">订单服务</span>
            <span class="switch2">产品咨询</span>
        </p>
        <i class="iconfont icon-dianhua"></i>
    </div>
</template>

<script>
      export default {
            name: "serviceTop"
      }
</script>

<style scoped>
  @import "../../../static/css/iconfont.css";
  .service{
    width: 100%;
    height: 0.43rem;
    background: #02bcd4;
    position: relative;
  }
  .switch{
    font-size:14px ;
    padding-top: 0.09rem;
    display: flex;
    align-items: center;
    border-radius:0.05rem ;
    justify-content: center;
  }
  .switch span{
    display: block;
    color: #fcffff;
    width:1.04rem ;
    height: 0.26rem;
    text-align: center;
    line-height: 0.26rem;
    border: 0.01rem solid #ffffff;
  }
  .service i{
    margin-right: 0.13rem;
    box-sizing: border-box;
    color:#89fffc;
    font-size: 20px;
    position: absolute;
    right: 0rem;
    bottom:0.11rem;
  }
</style>
