<template>
  <div class="zti">
    <plane-time-head></plane-time-head>
    <div class="content">
      <plane-piao-message :list="List"></plane-piao-message>
      <plane-piao-prodyct-list :list="List.piao"></plane-piao-prodyct-list>
    </div>
  </div>
</template>

<script>
    import PlaneTimeHead from "../components/buy/planeTimeHead";
    import PlanePiaoMessage from "../components/buy/planePiaoMessage";
    import PlanePiaoProdyctList from "../components/buy/planePiaoProdyctList";
    export default {
        name: "planePiao",
      components: {PlanePiaoProdyctList, PlanePiaoMessage, PlaneTimeHead},
      data(){
        return{
          List:[]
        }
      },
      created(){
        let id = this.$route.query.id;
        fetch("http://localhost:3000/api/plane?id="+id).then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.List = data;
              console.log(data)
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
    }
  .content{
    flex: 1;
    overflow-y: scroll;
  }
</style>
