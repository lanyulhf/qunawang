<template>
    <div>
      <div class="hotDestination">
        <h3 class="title">热门目的地</h3>
        <div class="desTit">
          <span>推荐</span>
          <span>当季热门</span>
          <span>好友出门</span>
          <span>家庭亲子</span>
        </div>
        <div class="spot">
          <div class="spotInfo" v-for="item in spot">
            <img :src="item.imgUrl" alt="图片">
            <h3>{{item.tit}}</h3>
            <p>{{item.info}}</p>
          </div>
        </div>

        <p class="moreBut"><a href="" class="more">查看更多<i class="iconfont icon-icon1"></i></a></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "hotDes",
        props:["spot"]
    }
</script>

<style scoped>
.hotDestination{
  width:100%;
  padding-left:0.14rem;
  box-sizing: border-box;
}
.hotDestination .title{
  font-size:0.2rem;
  line-height:0.5rem;

}
.hotDestination .desTit{
  display: flex;
  font-size:0.14rem;
  margin-bottom:0.12rem;
}
.hotDestination .desTit span {
  width: 0.8rem;
  line-height: 0.28rem;
  text-align: center;
  margin-right: 0.08rem;
  border-radius: 0.04rem;
  border: 2px solid #e3e3e3;
}
/*.hotDestination .desTit span:nth-child(1){
 background: #54bbd6;
  border: 2px solid #35afcf;
}*/
.hotDestination .desTit span:hover{
  background: #54bbd6;
  border: 2px solid #35afcf;
}
.hotDestination .spot{
  display: flex;
  overflow-x: scroll;

}
.hotDestination .spotInfo{
 display: flex;
  flex-direction: column;
  margin-right:0.08rem;
}
.hotDestination .spot h3 {
  font-size: 0.16rem;
  color: #191919;
  line-height:0.3rem;
}
.hotDestination .spot p{
  font-size:0.14rem;
  color:#191919;
  width:1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hotDestination .spot img{
  width:1.40rem;
  height:1.38rem;
  display:inline-block ;
  border-radius:0.06rem;
}
.moreBut{
  display: flex;
  justify-content: center;
}

.more{
  border-radius:0.14rem;
  width:1.0rem;
  line-height:0.32rem;
  border:2px solid #e3e3e3;
  text-align: center;
  color:#a5a5a5;
  font-size:0.1rem;
  margin-top:0.16rem;
}
.more .iconfont{
 margin-left:0.05rem;
}
</style>
