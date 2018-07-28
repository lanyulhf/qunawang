<template>
    <div>
       <div class="header">
         <div class="three"></div>
       </div>
      <div class="all">
          <img src="../../static/img/order/bluethree.jpg">
          <P>全部订单查询</P>
          <a href="#">
              <img src="../../static/img/order/right.jpg">
          </a>
      </div>
      <div class="foot">
          <p>————————— 下一站 去哪儿 —————————</p>
           <div class="kunming" v-for="item in lists">
             <div class="change">
               <a href="#" @click="change()">换一站</a>
             </div>
             <router-link to="/lists">
             <img :src=item.img1>
             </router-link>
             <div class="hotel">
               <a href="#">
                 <img :src=item.img2>
               </a>
               <a href="#"><img class="eight" :src=item.img3></a>
               <a href="#"><img class="twoty" :src=item.img4></a>
             </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order_form",
        data(){
             return{
                 ids:0,
                 lists:[
                   {"img1":require("../../static/img/order/kunming.jpg"),
                     "img2":require("../../static/img/order/datu.jpg"),
                     "img3":require("../../static/img/order/eight.jpg"),
                     "img4":require("../../static/img/order/twoty.jpg")
                   },
                  ]
             }
        },
        methods:{
          change(){
              this.ids++;
              console.log(this.ids);
          }
        }
    }
</script>

<style scoped>
  .header{
    width:100%;
    height:2.19rem;
    background:url("../../static/img/order/head.jpg") no-repeat;
  }
  .foot{
    width:3.56rem;
  }
  .foot .kunming .change{
    width:0.44rem;
    height:0.15rem;
    top:0.1rem;
    border:1px solid #e5e6de;
    left:3.03rem;
    border-radius:0.07rem;
    display: flex;
    position: absolute;
  }
  .foot .kunming .change a{
    font-size:0.09rem;
    color:#e5e6de;
    margin-left:0.05rem;
    line-height:0.16rem;
  }
  .foot  .eight{
    width:1.76rem;
    height:0.86rem;
    display:block;
    margin-left:0.04rem;
  }
  .foot .twoty{
    width:1.76rem;
    height:0.86rem;
    display:block;
    position: absolute;
    left:1.79rem;
    top:0.91rem;
  }
  .foot .hotel{
    width:1.76rem;
    height:1.76rem;
    position: relative;
    /*margin-left:0.1rem;*/
    margin-top:-0.2rem;
    display: flex;
  }
  .foot .kunming{
    width:3.55rem;
    height:1rem;
    /*display: flex;*/
    position: relative;
    margin-top:0.14rem;
    margin-left:0.1rem;
  }
  .foot p{
    font-size:0.13rem;
    margin-top:0.3rem;
    margin-left:0.13rem;
    color:#39a3af;
    font-weight:600;
  }
  .three{
    width:0.18rem;
    height:0.16rem;
    float: right;
    margin-right:0.1rem;
    margin-top:0.11rem;
    background:url("../../static/img/order/three.jpg") no-repeat;
  }
  .all{
    width:3.56rem;
    height:0.45rem;
    background:white;
    margin-left:0.1rem;
    border-radius:3px;
    display: flex;
  }
  .all img{
    width:0.18rem;
    height:0.2rem;
    margin-left:0.13rem;
    margin-top:0.11rem;
  }
  .all p{
    font-size:0.14rem;
    margin-left:0.11rem;
    margin-top:0.14rem;
  }
  .all a{
    display: flex;
  }
   .all a img{
     width:0.07rem;
     height:0.13rem;
     margin-left:2.0rem;
     margin-top:0.14rem;
   }

</style>
