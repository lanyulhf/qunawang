<template>
     <!--景点头部-->
     <div class="header">
       <post_header_top :post_data="post_data" :isActive="isActive"></post_header_top>
       <div class="header_left">
         <div class="jinru" v-for="n in post_data.header">
           <a>{{n.hea_size}}</a>
         </div>
         <div class="banyuan">
           <!--<img src="../../assets/img/post/banyuan.png" alt="">-->
         </div>
       </div>
     </div>
</template>

<script>
    import Post_header_top from "./post_header_top";
    export default {
        name: "post_header",
      components: {Post_header_top},
      props:["post_data","isActive"],
    }
</script>

<style scoped>
  .header{
    width:100%;
    height: 1.71rem;
    background: url("../../assets/img/post/header_bj.jpg") no-repeat;
    background-size: cover;

  }
  .xianji_box span{
    font-size: 0.12rem;
  }
  .jinru{
    font-size: 0.12rem;
    color: #f8fbfc;
    margin-top:0.79rem;
    display: flex;
    justify-content: center;
  }
  .banyuan{
    width:100%;
    height: 0.16rem;
    display: flex;
  }
  .banyuan img{
    width:100%;
    height: 0.16rem;
    margin-top: 16px;
  }

</style>
