<template>
     <div>
         <div class="foot">
           <span>必看景点</span>
           <a href="#">全部</a>
           <img src="../../../static/img/order/right.jpg">
           <lists_foot_imgs></lists_foot_imgs>
         </div>
     </div>
</template>

<script>
    import Lists_foot_imgs from "./lists_foot_imgs";
    export default {
        name: "lists_foot",
        components: {Lists_foot_imgs}
    }
</script>

<style scoped>
.foot{
  width:100%;
  height:2.07rem;
  display: flex;
  flex-direction: column;
  margin-top:0.1rem;
}
  .foot span{
    font-size:0.18rem;
    margin-left:0.11rem;
  }
  .foot a{
    font-size:0.12rem;
    color:#434343;
    margin-left:3.2rem;
    margin-top:-0.2rem;
  }
  .foot img{
    width:0.07rem;
    height:0.1rem;
    margin-left:3.5rem;
    margin-top:-0.12rem;
  }
</style>
