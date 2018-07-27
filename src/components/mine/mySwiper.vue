<template>
  <div class="content-swi">
      <div class="swiper-container swi">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../assets/img/mine/bg1.png"/></div>
              <div class="swiper-slide"><img src="../../assets/img/mine/bg2.png"/></div>
              <div class="swiper-slide"><img src="../../assets/img/mine/bg3.png"/></div>
          </div>
        <div class="swiper-pagination fyq"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper";
  export default {
    name: "mySwiper",
    mounted() {
      new Swiper('.swi', {
        effect: 'slide',
        autoplay: {
          delay: 4000,
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
    /*padding: 0 0.06rem;*/
  }
  .swi{
    font-size: 0.12rem;
    width: 100%;
    height: 1rem;
  }
  .swiper-slide img{
    height:1rem ;
    width:100%;
  }
</style>
