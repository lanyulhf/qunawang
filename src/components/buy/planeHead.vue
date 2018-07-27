<template>
  <div class="head">
    <i class="iconfont icon-fangzi"></i>
    <a href="#" class="jipiao">机票</a>
    <a href="#"></a>
  </div>
</template>

<script>
    export default {
        name: "planeHead",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  .head{
    width: 100%;
    display: flex;
    height: 0.5rem;
    justify-content: space-between;
    font-size: 0.16rem;
    line-height: 0.5rem;
    position: fixed;
    top: 0;
    z-index: 9;
    box-sizing: border-box;
    padding-left: 0.1rem;
    background: rgba(27, 169, 186, 0);
    color: rgb(255, 255, 255);
  }
  .head a{
    color: #fff;
    font-size: 0.16rem;
  }
  .head i{
    color: #fff;
    font-size: 0.22rem;
  }
  .jipiao{
    text-indent: -0.2rem;
  }

</style>
