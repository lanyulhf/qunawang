<template>
      <div>
          <div class="head">
               <img class="left" src="../../static/img/order/left.jpg">
                <!--<span>上海</span>-->
                <!--<span>西安</span>-->
                <!--<span>北京</span>-->
               <a href="#">换一批</a>
               <lists_img></lists_img>
               <lists_foot></lists_foot>
               <hotel></hotel>
          </div>
      </div>
</template>

<script>
    import Lists_img from "../components/hotel/lists_img";
    import Lists_foot from "../components/hotel/lists_foot";
    import Hotel from "../components/hotel/hotel";
    export default {
        name: "lists",
        components: {Hotel, Lists_foot, Lists_img},
    }
</script>

<style scoped>
.head{
   width:100%;
   height:1.51rem;
   display: flex;
   flex-direction: column;
}
  .head a{
    font-size:0.14rem;
    margin-left:3.1rem;
    color:black;
    margin-top:-0.17rem;
  }
  .head .left{
    width:0.15rem;
    height:0.21rem;
    margin-left:0.24rem;
    margin-top:0.15rem;
  }
</style>
