<template>
    <div>
        <div class="run">
            <ul class="run_guang">
                <li v-for="items in temp">
                   <img :src=items.imgs>
                   <span>{{items.titles}}</span>
                   <span>{{items.per}}</span>
                   <span>{{items.price}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lists_foot_imgs",
        data(){
          return{
             temp:[
               {"imgs":require("../../../static/img/order/degnhuo.jpg"),titles:"东方明珠",per:"504人想去",price:"￥156起"},
               {"imgs":require("../../../static/img/order/lanblue.jpg"),titles:"上海欢乐谷",per:"10326人想去",price:"￥99起"},
               {"imgs":require("../../../static/img/order/dixiayou.jpg"),titles:"上海水族馆",per:"2084人想去",price:"￥160起"},
               {"imgs":require("../../../static/img/order/hu.jpg"),titles:"上海野生动物园",per:"59人想去",price:"￥120起"},
               {"imgs":require("../../../static/img/order/youlun.jpg"),titles:"外滩",per:"1131人想去",price:"￥980起"}
             ]
          }
        }
    }
</script>

<style scoped>
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
    margin-top:0.11rem;
  }
.run span:nth-child(3){
  font-size:0.14rem;
  margin-left:0.15rem;
  margin-top:0.05rem;
}
.run span:nth-child(4){
  font-size:0.14rem;
  position: absolute;
  left:1.05rem;
  top:1.35rem;
  color:#f5963d;
}
</style>
