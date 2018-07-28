<template>
  <ul class="uls">
      <plane-piao-product v-for="l in list" :items="l"></plane-piao-product>
  </ul>
</template>

<script>
    import PlanePiaoProduct from "./planePiaoProduct";
    export default {
        name: "planePiaoProdyctList",
      components: {PlanePiaoProduct},
      props:['list']
    }
</script>

<style scoped>
  .uls{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
