<template>
    <div class="zti">
    <plane-head class="headHover"></plane-head>
      <div class="content">
        <plane-search @fshowMo="yshowMo"></plane-search>
        <plane-nav :items="List.nav"></plane-nav>
      </div>
      <mo-tai-window v-if="show" @fhideMo="yhideMo"></mo-tai-window>

    </div>
</template>

<script>
    import PlaneHead from "./planeHead";
    import PlaneSearch from "./planeSearch";
    import MoTaiWindow from "./moTaiWindow";
    import PlaneNav from "./plane-nav";
    import Fetch from "../../assets/mocks/fetch"
    export default {
        name: "planeTicket",
      components: {PlaneNav, MoTaiWindow, PlaneSearch, PlaneHead},
      data(){
          return{
            isHover : false,
            show:false,
            List:[]
          }
      },
      methods:{
        handleScroll(){
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          console.log(scrollTop)
          if(scrollTop>0){
            this.isHover = true
          }
        },
        yshowMo(i){
          this.show = i
        },
        yhideMo(i){
          this.show = i
        }
      },
      mounted(){
        window.addEventListener("scroll",this.handleScroll)
      },
      destroyed(){
        window.removeEventListener("scroll",this.handleScroll)
      },
      created(){
        // Fetch.fetchData("http://localhost:3000/api/choose",this.List)
        fetch("http://localhost:3000/api/plane").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.List = data;
              console.log(this.List)
            })
          }
        })
      }
    }
</script>

<style scoped>
  .zti{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F1F1F1;
  }

  .content{
    flex: 1;
    width: 100%;
    overflow-y: scroll;
  }

  .headHover{
    background: red;
  }



</style>
