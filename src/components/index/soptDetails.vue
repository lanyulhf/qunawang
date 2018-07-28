<template>
    <div class="details">
      <div class="detailsIn" v-for="item in spotDetail">
        <div class="detailsLeft">
          <h3>{{item.tit}}</h3>
          <p> <span>{{item.info1}}</span><span class="detailCen">{{item.info2}}</span><span v-if="item.info3" >{{item.info3}}</span></p>
        </div>
        <div class="detailRight"><img :src="item.imgUrl" alt="图片"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "spotDetails",
      props:["spotDetail"]
    }
</script>

<style scoped>
.details{
  width:100%;
}
.detailsIn{
  display: flex;
  padding:0.1rem 0.14rem;
  justify-content: space-between;
  border:1px solid #f9f9f9;
}
  .detailsIn h3{
    font-size: 0.16rem;
    line-height: 0.22rem;
    margin-top: 0.08rem;
  }
.detailsIn p{
  font-size: 0.12rem;
  color:#cdcdcd;
  margin-top:0.16rem;
}
.detailRight img{
  width:1.24rem;
  height:0.8rem;
  border-radius: 0.06rem;
}
.detailsLeft .detailCen{
  margin:0 0.08rem;
}

</style>
