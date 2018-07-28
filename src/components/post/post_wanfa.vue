<template>
  <div class="wanfa">
    <div class="wanfa_top">
      <p>{{n.wanfa_title}}</p>
    </div>
    <div class="wanfa_huadong">
      <div class="wanfa_one" v-for="j in n.wanfa_cen">
        <img :src= "j.wanfa_img">
        <p>{{j.wanfa_size}}</p>
      </div>
    </div>
    <div class="wanfa_bottom">
      <span>{{n.wanfa_for}}</span>
      <i class="iconfont icon-danjiantouyou youjiantou"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post_wanfa",
      props:["post_data","n"],
    }
</script>


<style scoped>
  .wanfa{
    background: #ffffff;
    margin-bottom: 0.12rem;
  }
  .wanfa_top{
    padding:0 0.1rem;
    font-size: 0.16rem;
    line-height: 0.56rem;
  }
  .wanfa_top p{
    color: #171717;
  }
  .wanfa_huadong{
    height:1.64rem;
    display: flex;
    padding:0 0.1rem;
    margin-bottom: 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
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
  .wanfa_bottom{
    font-size: 0.12rem;
    line-height: 0.55rem;
    border-top:1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
  }
  .wanfa_bottom span{
    margin-left:0.1rem;
    color: #727272;
    font-size: 0.14rem;
  }
  .youjiantou{
    font-size: 0.14rem;
    color: #9c9c9c;
    margin-right: 0.1rem;
  }
</style>
