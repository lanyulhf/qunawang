<template>
    <div class="wanle">
      <div class="wanle_top">
        <p>{{n.wanle_title}}</p>
      </div>
      <div class="wanle_huadong">
        <div class="wanle_one" v-for="j in n.wanle_cen">
          <img v-lazy= "j.wanle_img">
          <p>{{j.wanle_size}}</p>
          <p class="wanle_qian">{{j.wanle_qian}}<span>起</span></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "post_wanle",
        props:["post_data","n"],
      mounted(){
          console.log(this.n)
      }
    }
</script>

<style scoped>
  .wanle{
    background: #ffffff;
    margin-bottom: 0.12rem;
    height: 2.74rem;
  }
  .wanle_top{
    padding:0 0.1rem;
    font-size: 0.16rem;
    line-height: 0.56rem;
  }
  .wanle_top p{
    color: #171717;
  }
  .wanle_huadong{
    height: 1.95rem;
    display: flex;
    padding:0 0.1rem;
    margin-bottom: 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .wanle_one{
    width:1.72rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    border:1px solid #efefef;
    box-shadow: 0px 0px 5px 3px  #efefef;
    flex-shrink: 0;
    margin-right: 0.08rem;
  }
  .wanle_one img {
    width:100%;
    height: 1.1rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .wanle_one p{
    font-size: 0.14rem;
    margin-top:10px;
    padding:0 0.1rem;
  }
  .wanle_bottom span{
    margin-left:0.1rem;
    color: #727272;
    font-size: 0.14rem;
  }
  .wanle_qian{
    font-size: 0.14rem;
    color: #ff8027;
  }
  .wanle_qian span{
    color: #a5a5a5;
    font-size: 0.12rem;
  }
</style>
