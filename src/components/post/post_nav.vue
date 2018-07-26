<template>
  <!--景点导航部分-->
  <div class="nav">
    <div class="nav_box">
      <div class="nav_one">
        <img src="../../assets/img/post/nav_01.jpg" alt="">
        <span>攻略</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_02.jpg" alt="">
        <span>酒店</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_03.jpg" alt="">
        <span>景点</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_04.jpg" alt="">
        <span>玩乐</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_05.jpg" alt="">
        <span>美食林</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_06.jpg" alt="">
        <span>路线导航</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_07.jpg" alt="">
        <span>一日游</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_08.jpg" alt="">
        <span>必体验</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_09.jpg" alt="">
        <span>用车</span>
      </div>
      <div class="nav_one">
        <img src="../../assets/img/post/nav_10.jpg" alt="">
        <span>暑假</span>
      </div>
    </div>
    <!--特别提醒部分-->
    <post_remind></post_remind>
  </div>

</template>

<script>
    import Post_remind from "./post_remind";
    export default {
        name: "post_nav",
      components: {Post_remind}
    }
</script>

<style scoped>
.nav{
  background: #ffffff;
}
.nav_box{
  width: 100%;
  padding: 0rem 0.17rem 0.25rem;
  box-sizing: border-box;
  font-size: 0.12rem;
  color: #7a7a7a;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
  .nav_one{
    width: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:0.15rem;
  }
.nav_one img{
  width: 0.57rem;
  height: 0.57rem;
}
</style>
