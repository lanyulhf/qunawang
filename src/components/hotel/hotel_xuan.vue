<template>
    <div>
      <div class="hotel_xuan">
        <a class="dishi"  href="#">迪士尼度假区</a>
        <a class="dishi"  href="#">南京路步行街</a>
        <a class="dishi"  href="#">浦东机场</a>
        <div class="run">
          <ul class="run_guang">
            <li v-for="items in listss">
              <img :src=items.imgs>
              <span>{{items.titles}}</span>
              <span>{{items.per}}</span>
              <span>{{items.price}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "hotel_xuan",
          data(){
            return{
              listss:[
                {"imgs":require("../../../static/img/order/honhbaobai.jpg"),titles:"上海浦东主题万信酒店",per:"4.8分/2021评论",price:"￥467起"},
                {"imgs":require("../../../static/img/order/heilou.jpg"),titles:"上海海上铂锐酒店",per:"4.6分/711评分",price:"￥433起"},
                {"imgs":require("../../../static/img/order/honhbaojud.jpg"),titles:"上海龙之梦大酒店",per:"4.4/3876评分",price:"￥714起"},
                {"imgs":require("../../../static/img/order/huiyuanchuang.jpg"),titles:"上海浴景大酒店",per:"4.5分/3188评分",price:"￥606起"},
                {"imgs":require("../../../static/img/order/youlun.jpg"),titles:"上海萨维尔伯爵酒店",per:"4.7分/729评分",price:"￥338起"}
              ]
            }
          },
        }
</script>

<style scoped>
  .hotel_xuan{
    width:100%;
    height:2.37rem;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
  }
  .hotel_xuan a:nth-child(1){
    font-size:0.12rem;
    color:black;
    height:0.3rem;
    line-height:0.3rem;
    top:0.13rem;
    left:2.2rem;
    position: absolute;
    border:1px solid #dcdcdc;
    border-radius:0.1rem;
  }
  .hotel_xuan a:nth-child(2){
    font-size:0.12rem;
    color:black;
    height:0.3rem;
    line-height:0.3rem;
    top:0.13rem;
    left:0.1rem;
    position: absolute;
    border:1px solid #dcdcdc;
    border-radius:0.1rem;
  }
  .hotel_xuan a:nth-child(3){
    font-size:0.12rem;
    color:black;
    height:0.3rem;
    line-height:0.3rem;
    top:0.13rem;
    left:1.25rem;
    position: absolute;
    border:1px solid #dcdcdc;
    border-radius:0.1rem;
  }
  .run{
    width:100%;
    height:1.59rem;
    display:flex;
  }
  .run .run_guang{
    width:100%;
    height:1.59rem;
    margin-top:0.16rem;
    display: flex;
    overflow-x: scroll;
  }
  .run ul li{
    width:100%;
    display: flex;
    position: relative;
    flex-direction: column;
    margin-left:0.09rem;
  }
  .run span:nth-child(2){
    font-size:0.14rem;
    margin-left:0.15rem;
    margin-top:0.1rem;
  }
  .run span:nth-child(3){
    font-size:0.14rem;
    margin-left:0.15rem;
    margin-top:0.1rem;
  }
  .run span:nth-child(4){
    font-size:0.14rem;
    position: absolute;
    left:1.15rem;
    top:1.4rem;
    color:#f5963d;
  }
</style>
