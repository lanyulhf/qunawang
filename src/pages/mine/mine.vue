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

    </div>

</template>

<script>

      export default {
            name: "mine",
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
      margin-top:0.13rem ;
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
  .hFont{

  }
  .name{
      display: flex;
      justify-content: center;
  }
  .name h3{
      margin-top: 0.13rem;
      margin-left:0.03rem ;
  }
  .name img{
      width:0.45rem ;
      height: 0.23rem;
  }
  .hFont h3{
      color:#000;
      font-size: 17px;
  }
  .hFont .Img{

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
  .Members{

  }
</style>
