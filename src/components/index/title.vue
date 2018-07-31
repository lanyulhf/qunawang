<template>
    <div>
      <div class="productTitle">
        <a href="#" class="productTitleInfo" v-for="p in title">
          <img v-lazy="p.imgUrl" alt="图片">
          <span>{{p.tit}}</span>
        </a>

      </div>
    </div>
</template>

<script>
    export default {

      props:["title"]

    }
</script>

<style scoped>
  .productTitleInfo{
    display:flex;
    flex-direction: column;
    -webkit-align-items:center;
  }
  .productTitle{
    width:3.75rem;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  .productTitle .productTitleInfo{
    width:0.75rem;
    height:0.7rem;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-align-items:center;
    color:#242424;
    font-size:0.14rem;
  }
</style>
