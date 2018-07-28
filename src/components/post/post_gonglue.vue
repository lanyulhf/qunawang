<template>
  <!--玩法攻略-->
  <div class="gonglue">
    <div class="gonelue_wan">
      <p>游玩攻略</p>
      <div class="zuixin">
        <a href="javascript:;">全部</a>
        <a href="javascript:;">最新</a>
        <a href="javascript:;">精华</a>
      </div>
    </div>
    <div class="jingyan">
      <div class="gong_wan">
        <span>玩法</span>
        <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
      </div>
      <div class="gong_wan">
        <span>旅行经验</span>
        <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
      </div>
      <div class="gong_wan">
        <span>人群</span>
        <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
      </div>
      <div class="gong_wan">
        <span>时间</span>
        <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
      </div>
    </div>
    <post_huadong_com :post_data="post_data.huadong_com"></post_huadong_com>
    <post_gonglue_com :post_data="post_data.spotDetail"></post_gonglue_com>
  </div>
</template>

<script>
    import Post_huadong_com from "./post_huadong_com";
    import Post_gonglue_com from "./post_gonglue_com";
    export default {
        name: "post_gonglue",
      components: {Post_gonglue_com, Post_huadong_com},
      props:["post_data"],
    }
</script>

<style scoped>
  .gonglue{
    background: #ffffff;
  }
  .gonelue_wan{
  font-size: 0.16rem;
  color: #171717;
  display: flex;
  justify-content: space-between;
  margin-top:0.11rem;
  line-height: 0.43rem;
    border-bottom: 1px solid #f1f1f1;

}
  .gonelue_wan p{
    padding-left: 0.1rem;
  }
  .zuixin{
    padding-right: 0.1rem;
  }
.zuixin a{
  font-size: 0.12rem;
  color: #5f5f5f;
  margin:0 0.1rem;
}
  .zuixin a:hover{
    color: #00a5c5;
  }
  .jingyan{
    font-size: 0.12rem;
    color:#bdbdbd;
    display: flex;
    justify-content: space-around;
    line-height: 0.4rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .header_sanjiao{
    font-size: 0.12rem;
    color:#bdbdbd;
    margin-left: 0.27rem;
  }
</style>
