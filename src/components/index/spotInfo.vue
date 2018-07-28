<template>

  <div class="spotInfo" >
    <div class="spotInfoIn"  v-for="item in localInfo">
    <img  :src="item.imgUrl" alt="图片">
    <h3>{{item.tit}}</h3>
    <p>{{item.info}}</p>
  </div>
  </div>

</template>

<script>
    export default {
        name: "spotInfo",
      props:["localInfo"]
    }
</script>

<style scoped>
.spotInfo {

  width: 100%;
  font-size: 0.14rem;
  color: #5d5d5d;
  padding-bottom: 0.08rem;
  display: flex;
  justify-content: space-around;
}
.spotInfoIn {

  padding-bottom: 0.08rem;
  border:2px solid #f0f0f0;
  border-radius:0.06rem;
}
.spotInfoIn img{
 width:1.1rem;
  height:0.68rem;
  border-radius: 0.06rem;
}
.spotInfo h3{
  text-indent: 0.06rem;
  font-weight:100;
  font-size:0.16rem;
  color:#000;
  line-height: 0.30rem;
}
.spotInfo p{
  text-indent: 0.06rem;
  font-size:0.14rem;
  color:#5d5d5d;
}
</style>
