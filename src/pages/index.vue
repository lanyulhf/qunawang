<template>
<div class="indexBox">
  <my-swiper></my-swiper>
  <Head class="headBox"></Head>
  <Navigation></Navigation>
  <Title :title="title" class="title"></Title>
  <hot-des :spot="spot"></hot-des>
  <low-price></low-price>
  <local-play :comment="comment"></local-play>
</div>
</template>
<script>

  import Head from "../components/index/head";
  import mySwiper from "../components/index/mySwiper";
  import Navigation from "../components/index/navigation";
  import Title from "../components/index/title";
  import HotDes from "../components/index/hotDes";
  import LowPrice from "../components/index/lowPrice";
  import LocalPlay from "../components/index/LocalPlay";
  export default {
    components: {LocalPlay, LowPrice, HotDes, Title, Navigation, mySwiper, Head},
    data(){
      return {
        title:[],
        spot:[],
        comment:[]
      }
    },
    methods:{
      dataInit(){
        fetch("http://localhost:3000/api/index").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.title = data.productTitle;
              this.spot = data.spot;
              this.comment = data.comment;

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
    /*background:rgba(255,255,255,0.3);*/
  }
  .title{
    margin-top:0.1rem;
  }
</style>
