<template>
    <div class="headerBox" :class="{active:isActive}">
      <div class="header">
        <a href=""><span @click="goCity">{{cityHead}}</span><span><i class="iconfont icon-xiala"></i></span></a>
        <a href="javascript:">
          <span class="search"><i class="iconfont icon-sousuo"></i></span>
          <input type="text" placeholder="如家快捷酒店北京...">
        </a>
        <a href=""><i class="iconfont icon-xinxi"></i></a>
      </div>
    </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  export default {
    props:["isActive"],
    data(){
      return {
        cityHead:"西安"
      }
    },
    methods:{
      goCity(){
        Indicator.open('正在拼命加载中...');//点击出现加载中...
        setTimeout(()=>{
          Indicator.close();
        },1000);

        this.$router.push({ //路由跳转
          path:'/choose',
        })

      }
    },
    created(){
      this.cityHead=this.$route.query.cityL?this.$route.query.cityL:"西安";

    }




  }
</script>

<style scoped>
  .header{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0.08rem;
    box-sizing: border-box;
  }
  .header a{
    color:#626262;
    font-size:0.16rem;
    line-height:0.32rem;
  }
  .header a:nth-child(1){
    display: flex;
    background:rgba(255,255,255,.6);
    border-radius: 0.15rem;
    line-height:0.32rem;
    padding-left: 0.05rem;
    text-align: center;
  }

  .header a:nth-child(2){
    padding-left: 0.06rem;
    padding-right: 0.06rem;
    display: flex;
    align-items: center;
    background: rgb(240,240,240);
    border-radius: 0.15rem;
  }
  .header a:nth-child(3){
    background:rgba(255,255,255,.6);
    border-radius: 0.25rem;
    padding-left: 0.06rem;
    padding-right: 0.06rem;
  }
  .header a .iconfont{
    font-size:0.22rem;
  }
  .header input{
    border:0 solid #000;
    color:#626262;
    text-indent: 0.04rem;
    background: #f0f0f0;
    margin-left:0.04rem;
    padding: 0 0.06rem ;
    outline: none;
    line-height:0.32rem;
    background: url(../../assets/img/index/headerPic1.png) no-repeat right center;
  }
  input::-webkit-input-placeholder{
    color: #626262;
    font-size:0.16rem;
  }
  input::-moz-placeholder{
  color: #626262;
    font-size:0.16rem;
  }
  input:-ms-input-placeholder{
  color: #626262;
    font-size:0.16rem;
  }
  /*吸顶样式*/
  .active{
    position: fixed;
    top:0;
    /*transtion:all 0.5;*/
    background: rgba(255,255,255);
  }
</style>
