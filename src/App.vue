<template>
  <div id="app">
    <router-view class="content"></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "./components/common/Foot";
export default {
  name: 'App',
  components: {Foot},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.tabActive{
  color:#00afc7;
}
  .content{
    flex:1;
    overflow-y: scroll;
    overflow-x:hidden ;
  }

</style>
