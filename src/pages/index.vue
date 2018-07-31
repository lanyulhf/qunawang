<template>
  <div class="index">
    <!--公共导航部分-->
    <!--<Header></Header>-->
    <!--右侧表格部分-->
    <Index></Index>
  </div>
</template>

<script>
  import Header from "../components/common/header";
  import Index from "../components/index/Index";
    export default {
        name: "index",
      components: {Index}
    }
</script>

<style scoped>
/*.index{
  background: url(../assets/img/background.jpg) no-repeat;
  background-size:cover;
}*/
</style>
