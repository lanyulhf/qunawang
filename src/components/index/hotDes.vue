<template>
    <div>
      <div class="hotDestination">
        <h3 class="title">热门目的地</h3>
        <div class="desTit">
        <!--
          @click="reds(1)"
          @click="reds(2)"
          @click="reds(3)"-->
          <span :class="{red:changeRed==0}" @click="changeDate(0)" >推荐</span>
          <span :class="{red:changeRed==1}"   @click="changeDate(1)">当季热门</span>
          <span :class="{red:changeRed==2}"  @click="changeDate(2)">好友出门</span>
          <span :class="{red:changeRed==3}"  @click="changeDate(3)">家庭亲子</span>
          <!--<span v-for="(list,index) in soptLists" :class="{red:changeRed==index}" @click="reds(index)" >{{list.text}}</span>-->
          <!--<span v-for="(list,index) in soptLists"  :class="{ red:changeRed == index}" @click="reds(index)">{{list.text}}</span>-->
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
        props:["spot"],
      data(){
          return{
            /*soptLists:[
              {
                "text":"推荐"
              },
              {
                "text":"当季热门"
              },
              {
                "text":"好友出门"
              },
              {
                "text":"家庭亲子"
              }
            ],*/

            changeRed:0
          }

        },
     methods:{
       /* reds(index){
          this.changeRed = index;
        },
*/
         changeDate(index){
           this.changeRed = index;
           this.$emit("fchange",index)
         }

      },

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

.hotDestination .desTit .red{
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
<!--
{
"tit": "成都",
"imgUrl": "../../static/img/index/panda.png",
"info": "麻辣鲜香大都市"
},
{
"tit": "西安",
"imgUrl": "../../static/img/index/xian.png",
"info": "华夏千年古都"
},
{
"tit": "巴厘岛",
"imgUrl": "../../static/img/index/34b8ccd630a37302.jpg_r_390x260x90_1a866374.jpg",
"info": "酒店上门接送，自由行"
},
{
"tit": "恭王府",
"imgUrl": "../../static/img/index/51b63883c25f5d87af3c08bb016e2bd7.jpg_256x160_2c506073.jpg",
"info": "一起去看看和坤家"
},
{
"tit": "八达岭",
"imgUrl": "../../static/img/index/2b3b94de99c0a425a3.img.jpg_256x160_6b62ea82.jpg",
"info": "不到长城非好汉"
},
{
"tit": "颐和园",
"imgUrl": "../../static/img/index/d274c92de14c93da.water.jpg_256x160_a6703da7.jpg",
"info": "皇家行宫御园"
},
{
"tit": "故宫",
"imgUrl": "../../static/img/index/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",
"info": "世界宫殿典范"
},
{
"tit": "三亚",
"imgUrl": "../../static/img/index/8db08d342fdbb13c93835fbb.jpg_256x160_96f65102.jpg",
"info": "度假好地方"
},
{
"tit": "丽江",
"imgUrl": "../../static/img/index/4f8bf15c9a790cf7.jpg_r_390x260x90_b0fbfd85.jpg",
"info": "温泉海景，机票免费"
},
{
"tit": "泰国",
"imgUrl": "../../static/img/index/panda.png",
"info": "泰国曼谷芭堤雅"
},
{
"tit": "呼伦贝尔",
"imgUrl": "../../static/img/index/6f3276907a789902.jpg_r_390x260x90_6f5b802c.jpg",
"info": "越野穿越草原"
},
{
"tit": "北京",
"imgUrl": "../../static/img/index/a90aa658ad3b083393835fbb.jpg_256x160_9ad8743c.jpg",
"info": "甄品北京欢乐五日游"
},
{
"tit": "日本",
"imgUrl": "../../static/img/index/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg",
"info": "温泉享受"
},
{
"tit": "昆大丽6日游",
"imgUrl": "../../static/img/index/e9603bf3a8f7fbfd93835fbb.jpg_256x160_91a0d66d.jpg",
"info": "三大古镇+玉龙雪山+敞篷吉普环游洱海"
}
-->
