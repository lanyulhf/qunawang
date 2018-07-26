<template>
    <div class="order">
        <i class="iconfont icon-dingdan1"></i>
        <p>您还没有订单哦</p>
    </div>
</template>

<script>
      export default {
            name: "serviceOrder"
      }
</script>

<style scoped>
  @import "../../../static/css/iconfont.css";
  .order{
      text-align: center;
  }
  .order .iconfont{
      font-size:70px ;
      color:#b7b8ba;
      padding-top:1rem;
  }
  .order p{
      font-size:16px ;
      color:#a3a4a6;
      margin-top:0.25rem ;
  }
</style>
