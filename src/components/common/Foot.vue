<template>
  <div>
<div class="footer">
  <a href="">
    <span><i class="iconfont icon-luotuo"></i></span>
    <span>首页</span>
  </a>
  <a href="">
    <span><i class="iconfont icon-icon-"></i>
</span>
    <span>订单</span>
  </a>
  <a href="">
    <span><i class="iconfont icon-Compass-simple-line-icons"></i></span>
    <span>发现</span>
  </a>
  <router-link to="/service">
  <a href="">
    <span><i class="iconfont icon-fuwu"></i></span>
    <span>服务</span>
  </a>
  </router-link >

  <router-link to="/mine">
    <span><i class="iconfont icon-tubiaolunkuo-"></i></span>
    <span>我的</span>
  </router-link>
</div>
  </div>
</template>

<script scoped>
</script>

<style scoped>
.footer{
  border:1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
   width:100%;
  padding:0.06rem 0rem;
  box-sizing: border-box;
}
.footer a{
  font-size:0.12rem;
  color:#383838;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer a:hover{
  color:#00afc7;
}
.footer a .iconfont{
  font-size:0.22rem;
}
</style>
