<template>
  <div class="content-swi">
    <div class="swiper-container swi">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/img/index/3c014d49de263aea6bf9bffeda.png"/></div>
        <div class="swiper-slide"><img src="../../assets/img/index/20fb7d1ad6e24362882319cbfb.jpg_750x388x92.jpg"/></div>
        <div class="swiper-slide"><img src="../../assets/img/index/4756cd165e1462610598ceb201.png"/></div>

      </div>
      <div class="swiper-pagination fyq"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper";
  export default {
    name: "Slide",
    mounted() {
      new Swiper('.swi', {
        effect: 'slide',
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.fyq'
        },
      })
    }
  }
</script>

<style scoped>
  .content-swi{
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.06rem;
  }
  .swi{
    font-size: 0.12rem;
    width: 100%;
    height: 1.4rem;
  }
  .swi img{
    height:1.4rem ;
    width:100%;
  }
</style>
