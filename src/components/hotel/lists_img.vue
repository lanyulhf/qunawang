<template>
  <div>
    <div class="img2" v-for="n in lists">
        <img class="xian" :src=n.img1 alt="图">
        <img class="shanghai" :src=n.img2 alt="图">
        <img class="beijing" :src=n.img3 alt="图">
    </div>
  </div>
</template>

<script>
    export default {
        name: "lists_img",
        data(){
           return{
               lists:[
                 {"img1":require("../../../static/img/order/xian.jpg"),
                   "img2":require("../../../static/img/order/shanghai.jpg"),
                   "img3":require("../../../static/img/order/beijing.jpg")}
               ]
           }
        }
    }
</script>

<style scoped>
  .img2{
     display: flex;
  }
.xian{
  width:1rem;
  height:0.71rem;
  margin-top:0.14rem;
}
  .shanghai{
    width:1.71rem;
    height:1.2rem;
    margin-top:-0.1rem;
  }
  .beijing{
    width:1rem;
    height:0.71rem;
    margin-top:0.14rem;
  }
</style>
