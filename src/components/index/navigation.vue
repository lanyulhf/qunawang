<template>
  <div>
    <div class="navigation">
      <div class="navigationIn">
        <div class="left">

          <img src="../../assets/img/index/hotel.png" alt="图片">

        </div>
        <div class="center">
          <p >低价机票</p>
          <p>汽车票·船票</p>
        </div>
        <div class="right">
          <p class="speRight">火车票</p>
          <p>专车·租车</p>
        </div>
      </div>
        <div class="navigationIn navCenter" >
          <!--<router-link to="/planeTicket" >-->
        <div class="left" @click="goTic"><img src="../../assets/img/index/ticket.png" alt="图片"></div>
          <!--</router-link>-->
        <div class="center">
          <p >特价酒店</p>
          <p>海外酒店</p>
        </div>
        <div class="right">
          <p>客栈·名宿</p>
          <p>高端酒店</p>
        </div>
      </div>

      <div class="navigationIn navRight">
        <div class="left"><img src="../../assets/img/index/travel.png" alt="图片"></div>
        <div class="center">
          <p >景点门票</p>
          <p>旅游团购</p>
        </div>
        <div class="right">

            <router-link to="/post" tag="p">攻略·美食林</router-link>

          <p>周边游</p>
        </div>
      </div>
      <div class="bottom">
        <span>借钱信用卡</span>
        <span>保险·索赔</span>
        <span>购物·外汇</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "navigation",
      methods:{
        goTic(){
          this.$router.push({
            path:"/planeTicket",
            query:{
              cityL:"北京",
              cityR:"上海",
              monthL:new Date().getMonth(),
              dateL:new Date().getDate(),
              monthR:new Date().getMonth()+1,
              dateR:new Date().getDate()+1,
            }
          });
        }
      }
    }
</script>

<style scoped>
.navigation{
  box-sizing: border-box;
  background: #fff;
  width:100%;
  padding:0.06rem;
  font-size: 0.18rem;
  color:#ffffff;
}
  .navigationIn{
    font-size: 0.18rem;
    color:#ffffff;
    display: flex;
    justify-content: space-around;
  }
.navigationIn p{
  line-height:0.44rem;
  text-align: center;
  margin:0;
  background:#fc5951;
}
.navCenter p{
  background:#04a8f8;
}
.navRight p{
  background:#21cc5e;
}

.navigationIn .center{
  width:33%;
}
.navigationIn .center p{
  margin: 1px;
}
.navigationIn .right p{
  margin:1px 0;
}
.navigationIn .right .speRight{

  border-top-right-radius:0.04rem;
}

.navigationIn .right{
  width:33%;
}
.navigationIn  .left img{
  width:1.18rem;
  height:0.90rem;
}
.bottom{
  line-height:0.44rem;
  text-align: center;
  margin:0;
  font-size: 0.18rem;
  color:#ffffff;
  display: flex;
  box-sizing: border-box;
}
  .bottom span {
    background: #fbad23;
    width:33%;
  }
.bottom span:nth-child(2){
  margin:0 1px;
}
.bottom span:nth-child(1){
  border-bottom-left-radius:0.04rem;
}
.bottom span:nth-child(3){
  border-bottom-right-radius:0.04rem;
}
</style>
