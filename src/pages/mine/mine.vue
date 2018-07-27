<template>
    <div class="mine">
        <div class="mineTop">
            <div class="icon">
                <i class="iconfont icons icon-shezhi"></i>
                <p class="mineRight">
                    <i class="iconfont icon-saoyisaoerweimasaomasaomiao"></i>
                    <i class="iconfont icon-xinxi"></i>
                </p>
            </div>
            <div class="IMg">
                <img src="../../assets/img/mine/head.png" alt="">
            </div>
            <div class="hFont">
                <div class="name">
                    <h3>如果我开挖掘机你还会爱我吗scar</h3>
                    <img class="Img" src="../../assets/img/mine/go.png" alt="">
                </div>
                <p class="member">
                    <img class="Member" src="../../assets/img/mine/dog.png" alt="">
                    <span class="Members">新晋会员</span>
                    <i class="iconfont icon-icon1"></i>
                    <span class="delimiter">|</span>
                    <img src="../../assets/img/mine/qian.png" alt="">
                    <span class="zoo">0</span>
                    <span class="integral">会员积分</span>
                    <i class="iconfont icon-icon1"></i>
                </p>
            </div>
        </div>
        <div class="mineCommon">
            <div class="allorder">
                <ul class="uls">
                    <li>
                        <img src="../../assets/img/mine/q1.png" alt="">
                        全部订单
                    </li>
                    <li>
                        <img src="../../assets/img/mine/q2.png" alt="">
                        待出行
                    </li>
                    <li>
                        <img src="../../assets/img/mine/q3.png" alt="">
                        待支付
                    </li>
                    <li>
                        <img src="../../assets/img/mine/q4.png" alt="">
                        退款单
                    </li>
                </ul>
                <p class="gift">
                    <span class="one">
                        <img src="../../assets/img/mine/libao.png" alt="">
                        你有一个待领取的礼包
                    </span>
                    <span class="two">
                        去看看
                        <i class="iconfont icon-icon1"></i>
                    </span>
                </p>
            </div>
        </div>
        <div class="wallet">
            <p class="gift three">
                  <span class="one">
                      我的钱包
                  </span>
                  <span class="two">
                        余额、银行卡等
                        <i class="iconfont icon-icon1"></i>
                  </span>
            </p>
            <ul class="uls Uls">
                <li>
                    <img src="../../assets/img/mine/w1.png" alt="">
                    <span class="first">代金券</span>
                    <span class="last">5张</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/w2.png" alt="">
                    <span class="first">拿去花</span>
                    <span class="last">立即开通</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/w3.png" alt="">
                    <span class="first">借趣花</span>
                    <span class="last">最高三十万</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/w4.png" alt="">
                    <span class="first">信用卡</span>
                    <span class="last">联名信用卡</span>
                </li>
            </ul>
        </div>
        <div class="wallet second">
            <ul class="uls Uls">
                <li>
                    <img src="../../assets/img/mine/r1.png" alt="">
                    <span class="first">微信关注</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r2.png" alt="">
                    <span class="first">我的收藏</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r3.png" alt="">
                    <span class="first">我的浏览</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r4.png" alt="">
                    <span class="first">我的点评</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r5.png" alt="">
                    <span class="first">常用旅客</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r6.png" alt="">
                    <span class="first">常用地址</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r7.png" alt="">
                    <span class="first">发票抬头</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r8.png" alt="">
                    <span class="first">我的发票</span>
                </li>

            </ul>
            <ul class="uls Uls ULS">
                <li>
                    <img src="../../assets/img/mine/r9.png" alt="">
                    <span class="first">飞行管家</span>
                </li>
                <li>
                    <img src="../../assets/img/mine/r10.png" alt="">
                    <span class="first">邀请有礼</span>
                </li>
            </ul>
        </div>
      <div class="swiper"><MySwiper></MySwiper></div>
    </div>
</template>

<script>
  import MySwiper from '../../components/mine/mySwiper'
      export default {
            name: "mine",
          components:{
              MySwiper
          }
      }
</script>

<style scoped>
  @import "../../../static/css/iconfont.css";
.mine{
   font-size: 0.1rem;
}
.mineTop{
  height: 1.9rem;
  background: url("../../assets/img/mine/bg.png") no-repeat;
  background-size: 100%;
}
  .IMg{
      display: flex;
      justify-content: center;
      margin-top:0.25rem ;
  }
  .IMg img{
      border-radius: 0.5rem;
  }
  .icon{
    display: flex;
    justify-content: space-between;
    font-size: 23px;
    color:#fff0ff;
  }
  .icons{
      padding-top: 0.14rem;
      padding-left: 0.17rem;
      font-size: 23px;
  }
  .mineRight{
      padding-top: 0.14rem;
  }
  .mineRight .iconfont{
      font-size: 23px;
      margin-right: 0.16rem;
  }
  .name{
      display: flex;
      justify-content: center;
  }
  .name h3{
      margin-top: 0.13rem;
      margin-left:0.03rem ;
      font-weight: 400;
  }
  .name img{
      width:0.45rem ;
      height: 0.23rem;

  }
  .hFont h3{
      color:#000;
      font-size: 17px;
  }
  .delimiter{
      color:#e9e9e9;
      font-size: 13px;
      margin:0 0.14rem 0 0.12rem ;
      line-height: 0.18rem;

  }
  .member{
      font-size: 12px;
      color:#b0b0b0;
      line-height: 0.2rem;
      margin-top: 0.09rem;
      display: flex;
      justify-content: center;
  }
  .member img{
      width: 0.17rem;
      height: 0.17rem;
  }
  .Members,.zoo,.integral{
      line-height: 0.18rem;
      text-indent: 0.05rem;
  }
  .allorder{
    margin-top: 0.2rem;
  }
  .uls{
      display: flex;
      justify-content: space-around;
      margin: 0 0.18rem 0 0.18rem;
  }
  .uls img{
    width: 0.3rem;
    height: 0.27rem;
    margin-bottom: 0.09rem;
  }
  .uls li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gift{
      display: flex;
      justify-content: space-between;
      height: 0.44rem;
      align-items: center;
      margin-top: 0.22rem;
      border-top: 0.01rem solid #f2f2f2;
  }
  .gift img{
      margin:0rem 0.07rem 0 0.17rem ;
  }
  .gift .one{
      color:#1b1b1b;
      font-size: 15px;
      display: flex;
      align-items: center;
  }
  .two{
      font-size: 13px;
      color:#46b2ba;
      display: flex;
      align-items: center;
  }
  .two .iconfont{
      color:#828282;
      font-size: 18px;
      margin: 0.03rem 0.11rem 0 0;
  }
  .three{
      margin-top: 0;
      height: auto;
      padding-top: 0.2rem;
      border-top: 0.08rem solid #f5f5f5;
  }
  .three .one{
      margin-left:0.16rem ;
  }
  .three .two{
      color:#979797;
  }
  .Uls{
      margin-top:0.2rem ;
      flex-wrap: wrap;
  }
  .Uls li{
      width: 0.68rem;
      margin-bottom: 0.23rem;
  }
  .first{
      color:#5c5c5c;
  }
  .last{
      color:#a7a7a7;
      margin-top: 0.03rem;
  }
  .second{
      border-top: 0.08rem solid #f5f5f5;
  }
  .ULS {
      margin-top: 0;
      width: 1.7rem;
  }
  .swiper{
      width: 100%;
  }
</style>
