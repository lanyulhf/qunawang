<template>
    <div>
      <div class="localPlay">
        <h3 class="top">当地玩乐</h3>
        <div class="center" >
          <div class="centerIn" v-for="item in comment">
             <img :src="item.imgUrl" alt="图片">
                <p>
                  <span>1</span>
                  <span class="info">{{item.info}}</span>
                  <span><i class="iconfont icon-huomiao"></i>{{item.comment}}</span>
                </p>
            <p>
              <span>2</span>
              <span class="info">{{item.info}}</span>
              <span><i class="iconfont icon-huomiao"></i>{{item.comment}}</span>
            </p>
            <p>
              <span>3</span>
              <span class="info">{{item.info}}</span>
              <span><i class="iconfont icon-huomiao"></i>{{item.comment}}</span>
            </p>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LocalPlay",
      props:["comment"]
    }
</script>

<style scoped>
.localPlay{
  padding: 0 0.14rem;
  width:100%;
  box-sizing: border-box;
}
  .localPlay .top{
    font-size:0.2rem;
    line-height:0.5rem;
  }
.localPlay .centerIn img{
  margin-bottom: 0.14rem;
  border-top-right-radius: 0.06rem;
  border-top-left-radius: 0.06rem;
}
.localPlay .centerIn{
  font-size:0.12rem;
  width:1.68rem;
  border-radius: 6px;
  border:2px solid #efefef;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  /*line-height:0.5rem;*/
}
.localPlay .centerIn span:nth-child(1){
  width:0.26rem;
  height: 0.18rem;
  font-size:0.14rem;
  line-height:0.18rem;
  text-align: center;
  background: #eb4b4a;
  color:#fff;
  display: inline-block;
  border-top-right-radius: 3px;
  border-bottom-right-radius:3px ;
  margin-right: 0.06rem;
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
}
.localPlay .iconfont{
  color:#e71714;
  font-size: 0.12rem;
}
</style>
