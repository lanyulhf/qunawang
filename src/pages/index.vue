<template>
<div class="indexBox">
  <my-swiper></my-swiper>
  <Head class="headBox"></Head>
  <Navigation></Navigation>
  <Title :title="title" class="title"></Title>
</div>
</template>
<script>

  import Head from "../components/index/head";
  import mySwiper from "../components/index/mySwiper";
  import Navigation from "../components/index/navigation";
  import Title from "../components/index/title";
  export default {
    components: {Title, Navigation, mySwiper, Head},
    data(){
      return {
        title:[],
      }
    },
    methods:{
      dataInit(){
        fetch("http://localhost:3000/api/index").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.title = data.productTitle;
            })
          }
        })
      }


    },
    created(){
      this.dataInit();
    }
  }
</script>

<style scoped>
  .indexBox{
    position:relative;
  }
  .headBox{
    position:absolute;
    top:-0.05rem;
    z-index: 100;
    width:100%;
    background:rgba(255,255,255,0.7);
  }
  .title{
    margin-top:0.1rem;
  }
</style>
