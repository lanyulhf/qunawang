<template>
      <div class="dian_wan">
        <div class="dian_wan_one">
          <span>游玩攻略</span>
          <div class="dian_wan02">
            <span>最新</span>
            <span>精华</span>
          </div>
        </div>
        <div class="jingyan">
          <div class="gong_wan">
            <span :class="{hlspan01:a == 0}" @click=dian_clock(0)>玩法</span>
            <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
          </div>
          <div class="gong_wan">
            <span :class="{hlspan01:a == 1}" @click=dian_clock(1)>旅行经验</span>
            <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
          </div>
          <div class="gong_wan">
            <span :class="{hlspan01:a == 2}" @click=dian_clock(2)>人群</span>
            <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
          </div>
          <div class="gong_wan">
            <span  :class="{hlspan01:a == 3}" @click=dian_clock(3)>时间</span>
            <i class="iconfont icon-sanjiao_xia header_sanjiao"></i>
          </div>
        </div>
        <div class="dian_center">
          <a href="javascript:;">嘉兴出发</a>
          <a href="javascript:;">暑假</a>
          <a href="javascript:;">毕业游</a>
          <a href="javascript:;">深度游</a>
          <a href="javascript:;">短途周末</a>
          <a href="javascript:;">登山</a>
          <a href="javascript:;">骑行</a>
          <a href="javascript:;">徒步</a>
          <a href="javascript:;">邮轮</a>
          <a href="javascript:;">蜜月</a>
        </div>
        <div class="foot">
          <p>重置</p>
          <p @click="showIn(1)">确定</p>
        </div>
      </div>
</template>

<script>
    export default {
        name: "post_dian_wanfa",
      data(){
        return{
          a:0,
          flag:1
        }
      },
        methods:{
            dian_clock(i){
              this.a = i
            },
          showIn(v){
            this.$emit("hideIn",v)
          }

        }
    }
</script>

<style scoped>
.dian_wan{
  width:100%;
  min-height: 3.45rem;
  font-size: 0.14rem;
  position: fixed;
  bottom:0;
  color: #3b3b3b;
  background: #ffffff;
  z-index: 111;
}
  .dian_wan_one{
    display: flex;
    justify-content: space-between;
    line-height: 0.38rem;
    border-bottom: 1px solid #f3f3f3;
  }
  .dian_wan_one span{
    padding-left: 0.1rem;
  }
  .dian_wan02{
    padding-right: 0.1rem;
  }
.jingyan{
     font-size: 0.12rem;
     color:#474747;
     display: flex;
     justify-content: space-around;
     line-height: 0.4rem;
     border-bottom: 1px solid #f1f1f1;
   }
.header_sanjiao{
  font-size: 0.12rem;
  color:#bdbdbd;
  margin-left: 0.1rem;
}
  .dian_center{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    /*padding:0 0.1rem;*/
    margin-bottom: 0.32rem;
  }
  .dian_center a{
    color: #4b4b4b;
    width:25%;
    display: block;
    padding:0.05rem 0.04rem;
    border:1px solid #e1e1e1;
    margin:0.09rem 0.1rem;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    text-align: center;

  }
.dian_wan02 span:hover{
  color: #00a5c5;
}
  .foot{
    height: 0.35rem;
    border-top:1px solid #e1e1e1;
    width:100%;
    display: flex;
    align-items: center;
  }
  .foot p{
    width:50%;
    text-align: center;
    line-height: 0.35rem;
  }
.foot p:nth-child(2){
  background: #02bcd5;
  color: #ffffff;
}
  .hlspan01{
    color:#46c6db;
  }


</style>
