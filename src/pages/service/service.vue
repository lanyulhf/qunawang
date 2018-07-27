<template>
    <div>
        <div class="service">
            <p class="switch">
                <span :class="isShowService ==1? 'switchbtn':''" @click="isShowService = 1">订单服务</span>
                <span :class="isShowService ==2? 'switchbtn':''" @click="isShowService = 2">产品咨询</span>
            </p>
            <i class="iconfont icon-dianhua"></i>
        </div>
        <!-- <serviceTop></serviceTop>    -->
        <serviceOrder v-if="isShowService == 1"></serviceOrder>
        <div v-if="isShowService == 2">
            <serviceNav></serviceNav>
            <serviceSuit></serviceSuit>
        </div>
    </div>
</template>

<script>
  // import ServiceTop from '../../components/service/serviceTop'
  import ServiceNav from '../../components/service/serviceNav'
  import ServiceSuit from '../../components/service/serviceSuit'
  import ServiceOrder from '../../components/service/serviceOrder'
      export default {
            name: "service",
            data(){
              return {
                isShowService:1
              }
            },
            components:{
                // ServiceTop,
                ServiceNav,
                ServiceSuit,
                ServiceOrder
            },
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
  .switch .switchbtn{
    color: #36a6b1;
    background: #fff;
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
