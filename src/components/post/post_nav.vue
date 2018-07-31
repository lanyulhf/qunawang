<template>
  <!--景点导航部分-->
  <div class="nav">
    <div class="nav_box">
      <div class="nav_one" v-for="n in post_data.nav">
        <img v-lazy="n.nav_img">
        <span>{{n.nav_tit}}</span>
      </div>
    </div>
    <!--特别提醒部分-->
    <post_remind  :post_data="post_data.remind"></post_remind>
  </div>

</template>

<script>
    import Post_remind from "./post_remind";
    export default {
        name: "post_nav",
      components: {Post_remind},
      props:["post_data"],
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
