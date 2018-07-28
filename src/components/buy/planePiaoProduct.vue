<template>
    <li class="product">
      <div class="pro-left">
        <span class="tit">{{items.title}}</span>
        <span>{{items.stitle}}</span>
      </div>
      <div class="pro-right">
        <a href="#"><b>￥</b>{{items.price}}</a>
        <span>{{items.backs}}</span>
      </div>
    </li>
</template>

<script>
    export default {
        name: "planePiaoProduct",
      props:["items"]
    }
</script>

<style scoped>
    .product{
      width: 100%;
      height: 0.77rem;
      box-sizing: border-box;
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  .pro-left{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.12rem;
    justify-content: space-between;
    align-items: self-start;
    color: #666;
    box-sizing: border-box;
    padding: 0.1rem 0;
  }
  .tit{
    font-size: 0.14rem;
    color: #333;
  }
  .pro-right{
    width: 38%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 0.2rem;
  }
  .pro-right a{
    font-size: 0.16rem;
    color: #ff8205;
    display: flex;
    margin-right: 0.1rem;
    align-items: center;
  }
  .pro-right b{
    font-size: 0.14rem;
    color: #ff8205;
  }
  .pro-right span{
    display: block;
    width: 0.47rem;
    height: 0.3rem;
    background: #ff8205;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 0.05rem;
  }
</style>
