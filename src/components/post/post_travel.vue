<template>
    <!--景点行程部分-->
    <div class="traver">
      <div class="tianchong"></div>
      <div class="traver_top">
        <span>{{n.travel_size}}</span>
        <img src="../../assets/img/post/danjian.jpg" alt="">
        <span>{{n.travel_size02}}</span>
      </div>
      <div class="travel_max_box">
        <div class="traver_hangci01">
          <div class="zhifei">
            <span>{{n.travel_ban}}</span>
            <p>约<span class="zhifei_shi">{{n.travel_shi}}</span></p>
          </div>
          <div class="banci">
            {{n.travel_zhi}}
            <span class="banci_ban">班</span>
          </div>
          <div class="jiaqian">
            {{n.travel_qian}}
            <span class="jiaqian_qi">起</span>
            <i class="iconfont icon-danjiantouyou youjiantou"></i>
          </div>
        </div>
        <div class="traver_hangci02">
          <div class="zhifei">
            <span>{{n.travel_ban_two}}</span>
            <p>约<span class="zhifei_shi">{{n.travel_shi_two}}</span></p>
          </div>
          <div class="banci">
            {{n.travel_zhi_two}}
            <span class="banci_ban">班</span>
          </div>
          <div class="jiaqian">
            {{n.travel_qian_two}}
            <span class="jiaqian_qi">起</span>
            <i class="iconfont icon-danjiantouyou youjiantou"></i>
          </div>
        </div>

      </div>
      <div class="traver_bottom">
        <p>{{n.travel_bottom}}</p>
        <i class="iconfont icon-danjiantouyou youjiantou"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "post_travel",
      props:["post_data","n"],
    }
</script>

<style scoped>
  .traver{
    background: #ffffff;
  }
.tianchong{
  width:100%;
  height: 0.1rem;
  background: #f5f5f8;
}
  .traver_top{
    line-height: 0.52rem;
    font-size: 0.16rem;
    color: #353535;
    display: flex;
    align-items: center;
    padding:0 0.1rem;
  }
  .traver_top img{
    width:0.1rem;
    height: 0.04rem;
    margin:0 0.05rem;
  }
  .travel_max_box{
    min-height:1.34rem;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #efefef;
    padding:0 0.1rem;
  }
  .traver_hangci01{
    width:1.73rem;
    height: 1.14rem;
    background: url("../../assets/img/post/travel_bj01.jpg") no-repeat;
    font-size: 0.14rem;
    color: #9c9c9c;
  }
  .traver_hangci02{
    width:1.73rem;
    height: 1.14rem;
    background: url("../../assets/img/post/travel_bj02.jpg") no-repeat;
    color: #9c9c9c;
    font-size: 0.14rem;
  }
  .zhifei{
    display: flex;
    flex-direction: column;
    margin-left: 0.8rem;
    line-height: 0.22rem;
    margin-top:0.08rem;
  }
  .zhifei p{
    font-size: 0.12rem;
  }
  .zhifei span{
    font-size: 0.14rem;
  }
  .zhifei_shi{
    color:#585858;
    margin-left: 5px;
  }
  .banci{
    margin:26px 0px 0px 21px;
    color: #585858;
  }
  .banci_ban{
    font-size: 0.12rem;
    color:#9c9c9c;
  }
  .jiaqian{
    font-size: 0.16rem;
    color: #ff7655;
    margin:-18px 0px 0px 63px;
  }
  .jiaqian_qi{
    font-size: 0.14rem;
    color: #9c9c9c;
  }
  .youjiantou{
    font-size: 0.14rem;
    color: #9c9c9c;
  }
  .traver_bottom{
    line-height: 0.57rem;
    display: flex;
    margin-bottom:0.11rem;
    padding:0 0.1rem;
    justify-content: space-between;
  }
  .traver_bottom p{
    font-size: 0.14rem;
    color: #727272;
    line-height: 0.57rem;
  }
</style>
