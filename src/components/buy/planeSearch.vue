<template>
  <div class="search">
    <div class="top-banner"></div>
    <div class="home-search">
      <ul class="home-search-top">
        <li @click="li1(1)" :class="{active:isActive == 1}">国内</li>
        <li @click="li2(2)" :class="{active:isActive == 2}">国际/港澳台</li>
        <li @click="li3(3)" :class="{active:isActive == 3}">往返</li>
      </ul>
      <div class="home-search-city">
        <a href="#" @click="goCity(1)">{{leftCity}}</a>
        <span><img src="../../assets/img/plane.png" @click="changeCity"></span>
        <a href="#" @click="goCity(2)">{{rightCity}}</a>
      </div>
      <div class="home-search-time">
        <a href="#" @click="goCalendar(1)">{{startMonthL}}月{{startDateL}}日</a>
        <span v-if="searchRight">{{startDateR-startDateL}}</span>
        <a href="#" v-if="searchRight" @click="goCalendar(2)">{{startMonthR}}月{{startDateR}}日</a>
      </div>
      <div class="home-search-seat">
        <div class="seat" ><a href="#">选择舱位</a><span v-if="childChecked || babyChecked" @click="showMo(true)">预定说明</span></div>
        <div class="child" v-if="searchLeft">
          <a><input type="checkbox" v-model="childChecked"><div><p>携带儿童</p><p></p></div></a>
          <a><input type="checkbox" v-model="babyChecked"><div><p>携带婴儿</p><p></p></div></a>
        </div>
        <div class="child" v-if="searchCen">
          <a href="#"><span>1</span>成人<span>3</span>儿童</a>
        </div>
      </div>
      <div class="submit">
        <router-link to="{path:'/'}"><a href="#">搜索</a></router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "planeSearch",
      data(){
          return{
            leftCity:"北京",
            rightCity:"上海",
            startMonthL:3,
            startDateL:5,
            startMonthR:3,
            startDateR:6,
            childChecked:false,
            babyChecked:false,
            searchLeft:true,
            searchRight:false,
            searchCen:false,
            isActive:-1   //点击时的样式
          }
      },
      methods:{
          goCity(i){                //左右城市点击传递不同id，城市列表页进行不同筛选
            this.$router.push({
              path:'/choose',
              query:{
                id:i
              }
            })
          },
        changeCity(){               //左右切换位置
            let cen = null;
            cen = this.leftCity
            this.leftCity = this.rightCity;
            this.rightCity = cen;
        },
        showMo(i){
            this.$emit("fshowMo",i)
        },
        li1(i){
          this.searchRight = false
          this.searchLeft = true
          this.searchCen = false
          this.isActive = i
        },
        li2(i){
          this.searchRight = false
          this.searchLeft = false
          this.searchCen = true
          this.isActive = i
        },
        li3(i){
          this.searchRight = true
          this.searchLeft = false
          this.searchCen = true
          this.isActive = i
        },
        goCalendar(i){
            this.$router.push({
              path:'/calender',
              query:{
                id:i
              }
            })

        }
      },
      created(){
          this.leftCity = this.$route.query.cityL?this.$route.query.cityL:"北京";
          this.rightCity = this.$route.query.cityR?this.$route.query.cityR:"上海";
          this.startMonthL = this.$route.query.monthL?this.$route.query.monthL:"3";
          this.startDateL = this.$route.query.dateL?this.$route.query.dateL:"5";
          this.startMonthR = this.$route.query.monthR?this.$route.query.monthR:"3";
          this.startDateR = this.$route.query.dateR?this.$route.query.dateR:"6";
          if(this.startMonthR || this.startDateR){
            this.li3(3);
          }else if (this.startMonthL || this.startDateL){
            this.li1(1);
          }
      }
    }
</script>

<style scoped>
  .search{
    width: 100%;
  }
  .active{
    color: #00BCD4;
    border-bottom: 3px solid #00BCD4;
  }
  .top-banner{
    width: 100%;
    height: 2.28rem;
    background: url("../../assets/img/plane-top-banner.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .home-search{
    width: 94.5%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
    margin-top: -0.95rem;

  }
  .home-search-top{
    width: 100%;
    height: 0.44rem;
    display: flex;
    box-sizing: border-box;
    font-size: 0.14rem;
    justify-content: space-around;
    align-items: center;
  }
  .home-search-top li{
    padding-bottom: 0.06rem;
  }
  .home-search-city{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.2rem;
    height: 0.6rem;
    background: rgba(255, 255, 255, 0.96);
  }
  .home-search-city a{
    font-size: 0.22rem;
    font-weight: bold;
    color: #000;
  }
  .home-search-city span,img{
    display: flex;
    width: 0.4rem;
    height: 0.4rem;
  }
  .home-search-time{
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.2rem;
  }
  .home-search-time a{
    font-size: 0.18rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #212121;
  }
  .home-search-time span{
    font-size: 0.14rem;
  }
  .home-search-seat{
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.14rem;
    box-sizing: border-box;
    padding: 0 0.2rem;
  }
  .seat{
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 0.20rem;
  }
  .seat a{
    color: #000;
  }
  .seat span{
    width: 0.4rem;
    height: 0.4rem;
    background: #F1F1F1;
    color:#8A8A8A;
    font-size: 0.14rem;
    padding: 0.08rem;
    margin-left: 0.2rem;
  }
  .child{
    height: 100%;
    display: flex;
  }
  .child a{
    width: 0.78rem;
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #9E9E9E;
  }
  .child a input{
    margin-right: 0.05rem;
    border: 0;
  }
  .child span{
    margin: 0 0.02rem;
    font-size: 0.14rem;
    color: black;
  }
  .submit{
    width: 100%;
    height: 0.44rem;
    display: flex;
  }
  .submit a{
    width: 89%;
    height: 100%;
    margin: 0 auto;
    font-size: 0.16rem;
    color: #fff;
    background: #FF9800;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.2rem;
  }
</style>
