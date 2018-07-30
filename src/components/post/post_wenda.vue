<template>
    <div class="wenda">
      <div class="wenda_top">
        <p>热门问答</p>
        <i class="iconfont icon-danjiantouyou youjiantou"></i>
      </div>
      <div class="wenda_cen">
        <a href="javascript:;" :class="{color:falg == 1}" @click="tab(1)">全部</a>
        <a href="javascript:;" :class="{color:falg == 2}" @click="tab(2)">线路</a>
        <a href="javascript:;" :class="{color:falg == 3}" @click="tab(3)">交通</a>
        <a href="javascript:;" :class="{color:falg == 4}" @click="tab(4)">机场</a>
        <a href="javascript:;" :class="{color:falg == 5}"@click="tab(5)">住宿</a>
        <a href="javascript:;" :class="{color:falg == 6}" @click="tab(6)">火车</a>
        <a href="javascript:;" :class="{color:falg == 7}" @click="tab(7)">虹桥</a>
        <a href="javascript:;" :class="{color:falg == 8}" @click="tab(8)">旅行</a>
      </div>
      <div class="wenda_show">
        <div class="wenda_show_one" v-show="falg == 1" v-for="n in post_data">
          <div class="wenda_one">
            <h3>{{n.wenda_tit}}</h3>
            <span class="wenda_cen_span">{{n.wenda_size}}</span>
          </div>
          <div class="wenda_one">
            <h3>{{n.wenda_tit2}}</h3>
            <span class="wenda_cen_span">{{n.wenda_size2}}</span>
          </div>
          <div class="wenda_bot">
            <p>{{n.wenda_huida}}</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 2">
          <div class="wenda_one">
            <h3>我想先去上海然后去苏州 杭州 西塘 乌镇 麻烦给个好的行程路线谢谢</h3>
            <span class="wenda_cen_span">共45个回答</span>
          </div>
          <div class="wenda_one">
            <h3>两天的时间:东方明珠塔,南京路,外滩，豫园,怎么安排游玩路线</h3>
            <span class="wenda_cen_span">共9个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 3">
          <div class="wenda_one">
            <h3>西栅到上海交通如何最便捷</h3>
            <span class="wenda_cen_span">共6个回答</span>
          </div>
          <div class="wenda_one">
            <h3>我在虹桥站下车去东方明珠,外滩,城隍庙,怎么去</h3>
            <span class="wenda_cen_span">共5个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 4">
          <div class="wenda_one">
            <h3>要到迪士尼乐园,上海那个机场离得近</h3>
            <span class="wenda_cen_span">共6个回答</span>
          </div>
          <div class="wenda_one">
            <h3>我在虹桥站下车去东方明珠,外滩,城隍庙,怎么去</h3>
            <span class="wenda_cen_span">共5个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 5">
          <div class="wenda_one">
            <h3>下个月准备带孩子去上海迪士尼乐园,求大家推荐一下住宿的酒店和攻略</h3>
            <span class="wenda_cen_span">共6个回答</span>
          </div>
          <div class="wenda_one">
            <h3>我在虹桥站下车去东方明珠,外滩,城隍庙,怎么去</h3>
            <span class="wenda_cen_span">共5个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 6">
          <div class="wenda_one">
            <h3>西栅到上海交通如何最便捷</h3>
            <span class="wenda_cen_span">共6个回答</span>
          </div>
          <div class="wenda_one">
            <h3>我在虹桥站下车去东方明珠,外滩,城隍庙,怎么去</h3>
            <span class="wenda_cen_span">共5个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 7">
          <div class="wenda_one">
            <h3>我想先去上海然后去苏州 杭州 西塘 乌镇 麻烦给个好的行程路线谢谢</h3>
            <span class="wenda_cen_span">共45个回答</span>
          </div>
          <div class="wenda_one">
            <h3>两天的时间:东方明珠塔,南京路,外滩，豫园,怎么安排游玩路线</h3>
            <span class="wenda_cen_span">共9个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
        <div class="wenda_show_one" v-show="falg == 8">
          <div class="wenda_one">
            <h3>听说上海迪士尼人山人海,有避开高峰人群的经验嘛?</h3>
            <span class="wenda_cen_span">共15个回答</span>
          </div>
          <div class="wenda_one">
            <h3>外滩最佳观夜景时间是几点到几点?</h3>
            <span class="wenda_cen_span">共10个回答</span>
          </div>
          <div class="wenda_bot">
            <p>更多相关问答</p>
            <i class="iconfont icon-danjiantouyou lejiantou"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "post_wenda",
      props:["post_data"],
      data(){
          return {
            falg:1,
          }
      },
      methods:{
        tab(n){
          this.falg = n
        }
      }
    }
</script>

<style scoped>
  .color{
    background: #fec529;
    color:#ffffff !important;
  }
  .wenda{
    background: #ffffff;
  }
  .wenda_top{
    font-size: 0.16rem;
    padding:0 0.1rem;
    display: flex;
    line-height: 0.35rem;
    justify-content: space-between;
    color: #2e2e2e;
  }
  .wenda_top p{
    margin-top: 0.05rem;
  }
  .youjiantou{
    font-size: 0.14rem;
    color: #9c9c9c;
    margin-right: 0.1rem;
    margin-top: 0.07rem;
  }
  .wenda_cen{
    width: 100%;
    font-size: 0.14rem;
    box-sizing: border-box;
    display: flex;
    padding:0.17rem 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid #f0f0f0;
  }
  .wenda_cen a{
    color: #717171;
    padding:0.09rem 0.15rem;
    box-sizing: border-box;
    border:1px solid #f0f0f0;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 23px;
    margin:0 0.05rem;
    flex-shrink: 0;
  }
  .wenda_show{
    width:100%;
    font-size: 0.14rem;
    color: #6d6d6d;
  }
  .wenda_one{
    box-sizing: border-box;
    width:100%;
    min-height: 0.87rem;
    padding:0.1rem 0.11rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .wenda_one h3{
    color:#161616;
    background: url("../../../static/img/post/wenhao.jpg") no-repeat;
    text-indent: 0.21rem;
    line-height: 0.25rem;
  }
  .wenda_cen_span{
    line-height: 0.45rem;
  }
  .lejiantou{
    font-size: 0.14rem;
    color: #9c9c9c;
    margin-right: 0.1rem;
  }
  .wenda_bot{
    display: flex;
    align-items: center;
    padding: 0 0.11rem;
    line-height: 0.42rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .wenda_show{
    width:100%;
    position: relative;
  }
  .wenda_show_one{
    position: relative;
    background: #ffffff;
    width:100%;
  }
</style>
