<template>
<div class="indexBox">
  <!--头部-->
  <Head class="headBox" id="head" :isActive="sco"></Head>
  <!--轮播图-->
  <div class="post">
  <my-swiper></my-swiper>
  <!--导航-->
  <Navigation></Navigation>
  <!--分类导航-->
  <Title :title="title" class="title"></Title>
  <!--热门目的地-->
  <hot-des :spot="spot"></hot-des>
  <!--总有你要的低价-->
  <low-price></low-price>
  <!--当地玩乐-->
  <local-play :comment="comment" :localInfo="localInfo"></local-play>
  <!--全网比价-->
  <div class="priceRatio">
    <div class="priceRatioIn">
      <h3>全网比价</h3>
      <div class="info">
        <p><span>西安</span><span class="shanghai">上海</span></p>
        <p>7月25日</p>
      </div>
   </div>
    <p class="comTit">全国比价由Smart服务提供，目前只支持国内比价</p>
    <p class="fight"><span>机票比价</span><span>go&nbsp;&gt;</span></p>
    <p class="infoImg"><img src="../assets/img/index/evaluate.png" alt="图片"><img src="../assets/img/index/wisdom.png" alt="图片"><img src="../assets/img/index/travel3.png" alt="图片"></p>
  </div>
  <!--猜你喜欢部分-->
  <love :spotDetail="spotDetail"></love>
  </div>
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
  import Love from "../components/index/love";
  export default {
    components: {Love, LocalPlay, LowPrice, HotDes, Title, Navigation, mySwiper, Head},
    data(){
      return {
        sco:false,
        title:[],
        spot:[],
        comment:[],
        localInfo:[],
        spotDetail:[]
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
              this.localInfo = data.localInfo;
              this.spotDetail = data.spotDetail;
            })
          }
        })
      },
      handle(){
        var scrollTop = document.querySelector(".post").scrollTop;
        if(scrollTop<45){
          this.sco = false
        }else if(scrollTop>=45){
          this.sco = true
        }
      }

    },
    created(){
      this.dataInit();
    },
    mounted(){
      window.addEventListener("scroll",this.handle,true)
    },
    destroyed(){
      window.removeEventListener("scroll",this.handle,true)
    }


  }
</script>

<style scoped>
  .indexBox{
    position:relative;
   display: flex;
    flex-direction: column;
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
  /*全国比价区 */
  .priceRatio{
    position: relative;
    padding:0 0.14rem;
    width:100%;
    font-size:0.14rem;
    box-sizing: border-box;
    line-height: 0.46rem;
  }

  .priceRatio h3{
    font-size:0.2rem;

  }
  .shanghai{
    margin-left:42%;
  }
  .priceRatio .info{
    padding:0 0.12rem;
    background:url(../assets/img/index/priceRatio.png) no-repeat center center;
    background-size:cover ;
  }
.comTit{
  font-size:0.10rem;
  color:#a9a9a9;
  line-height:0.30rem;
}
  .fight{
    display: flex;
    flex-direction: column;
    position: absolute;
    top:0.7rem;
    left:2.8rem;
    font-size:0.16rem;
    color:#fff;
    font-weight: 600;
    line-height:0.28rem;
  }
  .fight span:nth-child(2){
    width:0.4rem;
    font-size: 0.14rem;
  text-align: center;
    display: inline-block;
    line-height: 0.20rem;
    border-radius:0.8rem;
    border:1px solid #a7dafb;
    margin-left:0.06rem;
  }
  .infoImg{
    display: flex;
    /*justify-content: space-around;*/
  }
  .infoImg img:nth-child(1){
    width:1.66rem;
    height:1.02rem;
  }
  .infoImg img:nth-child(2){
    width:0.82rem;
    height:1.02rem;
    margin:0 0.06rem;
  }
  .infoImg img:nth-child(3){
    width:0.82rem;
    height:1.02rem;
  }
.post{
  flex:1;
  overflow-y:scroll;

}
</style>
