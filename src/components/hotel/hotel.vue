<template>
    <div>
      <div class="hotel">
        <span>酒店精选</span>
        <a href="#">全部</a>
        <img src="../../../static/img/order/right.jpg">
        <hotel_xuan></hotel_xuan>
      </div>
    </div>
</template>

<script>
    import Hotel_xuan from "./hotel_xuan";
    export default {
        name: "hotel",
      components: {Hotel_xuan},

    }
</script>

<style scoped>
  .hotel{
    width:100%;
    height:2.07rem;
    display: flex;
    flex-direction: column;
    margin-top:0.35rem;
  }

  .hotel span{
    font-size:0.18rem;
    margin-left:0.11rem;
  }
  .hotel a{
    font-size:0.12rem;
    color:#434343;
    margin-left:3.2rem;
    margin-top:-0.2rem;
  }
  .hotel img{
    width:0.07rem;
    height:0.1rem;
    margin-left:3.5rem;
    margin-top:-0.12rem;
  }

</style>
