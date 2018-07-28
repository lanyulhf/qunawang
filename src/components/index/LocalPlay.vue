<template>
    <div>
      <div class="localPlay" >
        <h3 class="top">当地玩乐</h3>
        <div class="center" v-for="item in comment">
          <div class="centerIn" >
             <img :src="item.imgUrl" alt="图片">
                <p v-for="i in item.info">
                  <span>{{i.num}}</span>
                  <span class="info">{{i.info}}</span>
                  <span><i class="iconfont icon-huomiao"></i>{{i.comment}}</span>
                </p>
          </div>
        </div>
        <div class="bot">
        <spot-info :localInfo="localInfo"></spot-info>
        </div>
      </div>
    </div>
</template>

<script>
    import SpotInfo from "./spotInfo";
    export default {
        name: "LocalPlay",
      components: {SpotInfo},
      props:["comment","localInfo"]
    }
</script>

<style scoped>
  .bot{
    clear:both;
  }
.localPlay{
  padding-left:0.09rem;
  padding-right:0.04rem;
  width:100%;
  box-sizing: border-box;
}
  .localPlay .top{
    font-size:0.2rem;
    line-height:0.5rem;
  }
.localPlay .center{
  color:#171717;
 float:left;
  /*display: flex;*/
}
.localPlay .centerIn img{
  margin-bottom: 0.14rem;
  border-top-right-radius: 0.06rem;
  border-top-left-radius: 0.06rem;
}
center{
  margin-left:0.14rem;
}
.localPlay .centerIn{
  margin-bottom:0.08rem;
  margin-left:0.08rem;
  padding:0 0.02rem;
  width:1.58rem;
  font-size:0.12rem;
  border-radius: 6px;
  border:2px solid #efefef;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color:#1a1a1a;
}

.localPlay .centerIn span:nth-child(1){
  width:0.26rem;
  height: 0.18rem;
  font-size:0.14rem;
  line-height:0.18rem;
  text-align: center;
  background: #ec5730;
  color:#fff;
  display: inline-block;
  border-top-right-radius: 3px;
  border-bottom-right-radius:3px ;
  /*margin-right: 0.06rem;*/
}
.localPlay .centerIn p{
  display: flex;
  padding-bottom: 0.12rem;
  line-height: 0.18rem;
}
.localPlay .centerIn .info{
  display: block;
  width:0.96rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 0.06rem;
}
.localPlay .iconfont{
  color:#e71714;
  font-size: 0.12rem;
}
</style>
