<template>
  <!--拍照指南-->
  <div class="zhinan">
    <div class="zhinan_box" v-for="n in post_data.zhinan">
      <div class="zhinan_top">
        <span>{{n.zhinan_tit}}</span>
      </div>
      <img :src="n.zhinan_pic">
      <div class="zhinan_youwan">
        <div class="zhinan_sheying">
          <span>摄影</span>
        </div>
        <div class="zhinan_sheying zhinan_sheying02">
          <span>周末游</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "post_zhinan",
        props:["post_data"]
    }
</script>

<style scoped>
.zhinan{
  height: 2.78rem;
  background: #ffffff;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding:0 0.08rem;
  margin-bottom: 0.1rem;
}
.zhinan_box{
  flex-shrink: 0;
  width: 3.4rem;
}
  .zhinan_top{
    height: 0.68rem;
    font-size: 0.14rem;
    color:#575757;
  }
  .zhinan_top span{
    line-height: 0.6rem;
  }
  .zhinan_img{
    width:3.36rem;
    height: 1.54rem;
  }
  .zhinan_sheying{
    width:0.46rem;
    height: 0.23rem;
    border:1px solid #ececec;
    background: #f7f7f7;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zhinan_sheying span{
    font-size: 0.12rem;
    color: #686868;
  }
  .zhinan_sheying02{
    width: 0.59rem;
    margin-left: 0.09rem;
  }
  .zhinan_youwan{
    display: flex;
  }
  .zhinan_top02{
    height: 0.5rem;
    padding-top:0.17rem;
  }
</style>
