<template>
  <div>
    <div class="love">
      <h3 class="tit">猜你喜欢</h3>
      <img src="../../assets/img/index/ambitus.png" alt="图片">
      <p class="info">抖音网红西安的正确打开方式酱婶儿</p>
      <p class="subTit"><span>周边精选</span></p>
    </div>
   <spot-details :spotDetail="spotDetail"></spot-details>
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
}

</style>
