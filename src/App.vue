<template>
  <div id="app">
    <Header></Header>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Header from "./components/common/Header";
export default {
  name: 'App',
  components: {Header}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(assets/img/background.jpg) no-repeat;
  background-size:cover;
  min-height: 700px;
}
  .right{
    width:80%;
    position:relative;
    left:20%;
    padding:10px;
    box-sizing: border-box;
  }
</style>
