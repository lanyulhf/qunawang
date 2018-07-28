<template>
  <div>
    <div class="love">
      <h3 class="tit">猜你喜欢</h3>
      <img src="../../assets/img/index/ambitus.png" alt="图片">
      <p class="info">抖音网红西安的正确打开方式酱婶儿</p>
      <p class="subTit"><span>周边精选</span></p>
    </div>
   <spot-details :spotDetail="spotDetail" :n="n" v-for="n in spotDetail" :key="n.cardTypeName"></spot-details>
    <p class="moreBut"><a href="" class="more">查看更多<i class="iconfont icon-icon1"></i></a></p>

  </div>
</template>

<script>

    import SpotDetails from "./soptDetails";
    export default {
        name: "love",
      props:["spotDetail"],
      components: {SpotDetails},
    }
</script>

<style scoped>
.love{
  width:100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.14rem;
  box-sizing: border-box;
}
.love .tit{
  font-size:0.2rem;
  line-height: 0.6rem;
}
.love .info{
  font-size:0.16rem;
  line-height: 0.34rem;
}
.love .subTit{
  font-size:0.12rem;
  color:#d3d3d3;
  border-bottom: 1px solid #fafafa;
  margin-bottom:0.12rem;
}
.moreBut{
  display: flex;
  justify-content: center;
}

.more{
  border-radius:0.14rem;
  width:1.0rem;
  line-height:0.32rem;
  border:2px solid #e3e3e3;
  text-align: center;
  color:#a5a5a5;
  font-size:0.1rem;
}
.more .iconfont{
  margin-left:0.05rem;
}
</style>
