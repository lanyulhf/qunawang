<template>
  <div>
  <mt-header title="多个按钮" style="background:#04D9DD;height: 0.5rem;font-size: 0.16rem">
    <router-link to="/post" slot="left">
      <mt-button icon="back">返回</mt-button>
      <mt-button >关闭</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <mt-index-list class="tittle">
    <mt-index-section :index="c.title" v-for="c in chooseList">
      <div  @click="goto(p)" v-for="p in c.cityList"><mt-cell :title="p" ></mt-cell></div>
    </mt-index-section>
  </mt-index-list>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
    export default {
        name: "chooseTwo",
      data(){
          return{
            chooseList:[]
          }
      },
      methods:{
          goto(i){
            Indicator.open('正在拼命加载中...');//点击出现加载中...
            setTimeout(()=>{
              Indicator.close();
            },1000);

             //点击左边城市返回的值
              this.$router.push({
                path:'/post',
                query:{
                  cityL:i
                }
              })
          },
        handleScroll(){                                       //打印出滚动的距离
          var scrollTop = document.querySelector(".tittle").scrollTop
          console.log(scrollTop)
        }
      },
      created(){                                      //后台获取数据渲染城市列表
          fetch("http://localhost:3000/api/choose").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.chooseList = data;
              })
            }
          })

      },
      mounted(){
          window.addEventListener("scroll",this.handleScroll,true) //监听滚动条
      },
      destroyed(){
          window.removeEventListener("scroll",this.handleScroll,true) //离开页面时销毁事件监听
      }


    }
</script>

<style scoped>
    .tittle{
      font-size: 0.22rem;
    }
</style>
