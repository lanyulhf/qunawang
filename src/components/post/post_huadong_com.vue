<template>
  <div class="wanfa">
    <div class="wanfa_huadong">
      <div class="wanfa_one" v-for="n in post_data">
        <img :src= "n.wanle_img">
        <p>{{n.wanle_size}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post_huadong_com",
      props:["post_data"],
    }
</script>

<style scoped>
  .wanfa{
    background: #ffffff;
  }
  .wanfa_top p{
    color: #171717;
  }
  .wanfa_huadong{
    height:1.9rem;
    display: flex;
    padding:0 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 0.09rem;
  }
  .wanfa_one{
    width:1.72rem;
    height: 1.61rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    border:1px solid #efefef;
    box-shadow: 0px 0px 5px 3px  #efefef;
    flex-shrink: 0;
    margin-right: 0.08rem;
  }
  .wanfa_one img {
    width:100%;
    height: 1.1rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .wanfa_one p{
    font-size: 0.14rem;
    text-align: center;
    margin-top:10px;
  }
  .wanfa_bottom span{
    margin-left:0.1rem;
    color: #727272;
    font-size: 0.14rem;
  }
</style>
