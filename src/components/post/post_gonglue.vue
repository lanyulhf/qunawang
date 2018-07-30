<template>
  <!--玩法攻略-->
  <div class="gonglue" id="hanlu">
    <div id="navB">
      <div class="gonelue_wan" >
        <p>游玩攻略</p>
        <div class="zuixin">
          <span id="t_qb" @click="show(0)">全部</span>
          <span id="t_qx" @click="show(1)">最新</span>
          <span id="t_jh" @click="show(2)">精华</span>
        </div>
      </div>
      <div class="jingyan">
        <div class="gong_wan" @click="dian_clock(0)">
          <span @click="chuxian(2)" :class="{hlspan01:a==0}">玩法</span>
          <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
        </div>
        <div class="gong_wan" @click="dian_clock(1)">
          <span @click="chuxian(2)" :class="{hlspan01:a==1}">旅行经验</span>
          <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
        </div>
        <div class="gong_wan" @click="dian_clock(2)">
          <span @click="chuxian(2)" :class="{hlspan01:a==2}">人群</span>
          <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
        </div>
        <div class="gong_wan" @click="dian_clock(3)">
          <span @click="chuxian(2)" :class="{hlspan01:a==3}">时间</span>
          <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
        </div>
      </div>
    </div>
    <post_huadong_com :post_data="post_data.huadong_com"></post_huadong_com>
    <post_gonglue_com :info="info"></post_gonglue_com>
    <post_dian_wanfa v-show="flag==2" @hideIn="hide"></post_dian_wanfa>
  </div>
</template>

<script>
    import Post_huadong_com from "./post_huadong_com";
    import Post_gonglue_com from "./post_gonglue_com";
    import Post_dian_wanfa from "./post_dian_wanfa";
    export default {
        name: "post_gonglue",
      components: {Post_dian_wanfa, Post_gonglue_com, Post_huadong_com},
      props:["post_data","info"],
      data(){
          return{
            flag:1,
            a:0
          }
      },
      methods:{
        show(index){
          this.$emit("fchange",index)
        },
        dian_clock(i){
          this.a = i
        },
        chuxian(i){
          this.flag=i
        },
        hide(a){
          this.flag=a
        }
      }
    }
</script>

<style scoped>
  .hlspan01{
    color:#46c6db;
  }
  .gonglue{
    background: #ffffff;
  }
  .gonelue_wan{
  font-size: 0.16rem;
  color: #171717;
  display: flex;
  justify-content: space-between;
  margin-top:0.11rem;
  line-height: 0.43rem;
    border-bottom: 1px solid #f1f1f1;

}
  .gonelue_wan p{
    padding-left: 0.1rem;
  }
  .zuixin{
    padding-right: 0.1rem;
  }
.zuixin span{
  font-size: 0.12rem;
  color: #5f5f5f;
  margin:0 0.1rem;
}
  .zuixin span:hover{
    color: #00a5c5;
  }
  .jingyan{
    font-size: 0.12rem;
    color:#bdbdbd;
    display: flex;
    justify-content: space-around;
    line-height: 0.4rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .header_sanjiao{
    font-size: 0.12rem;
    color:#bdbdbd;
    margin-left: 0.27rem;
  }
  #navB{
    width: 100%;
  }
  .show1{
    margin-top: 0.86rem;
  }
  .show{
    position: fixed;
    top: 0;
    z-index: 10000;
    background: #fff;
    overflow: hidden;
    width: 100%;
    margin-top: 0.45rem;
  }
</style>
