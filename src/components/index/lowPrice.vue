<template>
  <div>
    <div class="price">
      <h3>总有你要的低价</h3>
      <div class="priceInfo">
        <div class="left">
          <p>北京-日本6天5晚</p>
          <p>￥<span class="newP">7399</span>起<span class="oldP">￥10988</span></p>
        </div>
        <div class="right">
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <p class="moreBut"><a href="" class="more">查看更多<i class="iconfont icon-icon1"></i></a></p>

    </div>
  </div>
</template>

<script>
    export default {
        name: "lowPrice"
    }
</script>

<style scoped>
.price{
  width:100%;
  padding-left:0.16rem;
  box-sizing: border-box;
}
.price h3{
  font-size:0.2rem;
  line-height: 0.5rem;
}
.priceInfo{
  display: flex;
}
.price  .left{
  position:relative;
  width:53%;
  display: flex;
  flex-direction: column;
  height:1.58rem;
  padding-left: 0.1rem;
  font-size:0.14rem;
  margin-right:0.1rem;
  background: url(../../assets/img/index/specialPrice.png) no-repeat;
  background-size:100% 100%;
}
.price  .left p:nth-child(1){
 line-height: 0.32rem;
  position:absolute;
  top:0.96rem;
}
.price  .left p:nth-child(2){
  font-size:0.12rem;
  color:#00001c;
  position:absolute;
  top:1.25rem;
}
.price  .left .newP{
  font-size:0.20rem;
  font-weight: 600;
}
.price  .left .oldP{
  text-decoration: line-through;
}
  .right{
    width:1.34rem;
    display: flex;
    flex-direction: column;
  }
.right a{
  display: flex;
  width:1.34rem;
  height:0.74rem;
}
.right a:nth-child(1){
  background: url(../../assets/img/index/airTicket.png) no-repeat;
}
.right a:nth-child(2){
  margin-top: 0.1rem;
  background: url(../../assets/img/index/Hotel-Package.png) no-repeat;
}
.more{
  border-radius:0.14rem;
  width:1.0rem;
  line-height:0.32rem;
  border:2px solid #e3e3e3;
  text-align: center;
  color:#a5a5a5;
  font-size:0.1rem;
  margin-top:0.16rem;
}
.moreBut{
  display: flex;
  justify-content: center;
}
.more .iconfont{
  margin-left:0.05rem;
}
</style>
