<template>
  <div class="post">
    <!--景点头部-->
    <post_header :isActive="sco" :post_data="post_data"></post_header>
      <div class="content">
        <!--景点导航部分-->
        <post_nav :post_data="post_data"></post_nav>
        <!--景点行程部分-->
        <post_travel :post_data="post_data.travel"  :n = "n" v-for="n in post_data.travel" :key="n.cardTypeName"></post_travel>
        <!--住宿攻略-->
        <post_put></post_put>
        <!--玩法推荐-->
        <post_wanfa :post_data="post_data.wanfa" :n = "n" v-for="n in post_data.wanfa" :key="n.cardTypeName"></post_wanfa>
        <!--当地哪好玩-->
        <post_wanfa :post_data="post_data.haowan" :n = "n" v-for="n in post_data.haowan" :key="n.cardTypeName"></post_wanfa>
        <!--拍照指南-->
        <post_zhinan :post_data="post_data"></post_zhinan>
        <!--当地玩乐-->
        <post_wanle :post_data="post_data.wanle" :n= "n" v-for="n in post_data.wanle" :key="n.cardTypeName"></post_wanle>
        <!--热门问答-->
        <post_wenda :post_data="post_data.wenda"></post_wenda>
        <!--玩法攻略-->
        <post_gonglue :post_data="post_data" :info="info" @fchange="pchange"></post_gonglue>

    </div>
  </div>
</template>

<script>
    import Post_header from "../components/post/post_header";
    import Post_nav from "../components/post/post_nav";
    import Post_travel from "../components/post/post_travel";
    import Post_put from "../components/post/post_put";
    import Post_wanfa from "../components/post/post_wanfa";
    import Post_zhinan from "../components/post/post_zhinan";
    import Post_wanle from "../components/post/post_wanle";
    import Post_wenda from "../components/post/post_wenda";
    import Post_gonglue from "../components/post/post_gonglue";
    export default {
        name: "post",
      components: {
        Post_gonglue,
        Post_wenda, Post_wanle, Post_zhinan, Post_wanfa, Post_put, Post_travel, Post_nav, Post_header},
      data(){
        return {
          info:[],
          post_data:{},
          all:[],
          index:0,
          // new:[],
          // jinghua:[],
          sco:false
        }
      },
      methods:{ //在接口请求数据
        post(){
          fetch("http://localhost:3000/api/post").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.post_data = data;
                this.all = data.spotDetail_one;
                this.info = this.all[this.index].spotDetail; //获取子组件数据
              })
            }
          })
        },
        pchange(index){
          this.index=index;
          this.info = this.all[this.index].spotDetail;
        },
        handle(){
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop<45){
            this.sco = false
          }else if(scrollTop>=45){
            this.sco = true
          }
        },
      },
      created(){//调用拿到的函数
        this.post();

      },
      mounted(){

          window.addEventListener("scroll",this.handle,true);

          let navB = document.querySelector("#navB");
          let hanlu = document.querySelector("#hanlu");
          let tqb = document.querySelector("#t_qb");
          let tqx = document.querySelector("#t_qx");
          let tjh = document.querySelector("#t_jh");
          window.onscroll = function () {
            //获取下页面的滚动条高度
            let top = document.documentElement.scrollTop || document.body.scrollTop;

            //判断比较是否达到700的高度
            if(top >= 2451) {
              //是的话，就给加上class名
              hanlu.classList.add('show1');
              navB.classList.add('show');
            } else {
              //如果不是，那么删除class名
              navB.classList.remove('show');
              hanlu.classList.remove('show1');
            }
          };

        tqb.onclick = function(){
          $('html,body').animate({'scrollTop':'2455px'},500);
        };
        tqx.onclick = function(){
          $('html,body').animate({'scrollTop':'2455px'},500);
        };
        tjh.onclick = function(){
          $('html,body').animate({'scrollTop':'2455px'},500);
        }

      },
      destroyed(){
          window.removeEventListener("scroll",this.handle,true)
      }
    }
</script>

<style>
 body{
  background: #f5f5f8;
}
 .post{
   height: 100%;
  display: flex;
   /*position:relative;*/
   width:100%;
   flex-direction:column ;
 }
  .content{
    flex:1;
    overflow-y:scroll;
  }
</style>
