<template>
    <div class="details" >
      <div class="detailsIn" v-for="item in n.info">
        <div class="detailsLeft">
          <h3>{{item.tit}}</h3>
          <p> <span>{{item.info1}}</span><span class="detailCen">{{item.info2}}</span><span v-if="item.info3" >{{item.info3}}</span></p>
        </div>
        <div class="detailRight"><img v-lazy="item.imgUrl" alt="图片"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "spotDetails",
      props:["spotDetail","n"]
    }
</script>

<style scoped>
.details{
  width:100%;
  padding:0rem 0.14rem;
  box-sizing: border-box;
  color:#1a1a1a;
}
.detailsIn{
  display: flex;
  padding:0.1rem 0rem;
  justify-content: space-between;
  border:1px solid #f9f9f9;
}
  .detailsIn h3{
    font-size: 0.14rem;
    line-height: 0.22rem;
    margin-top: 0.08rem;
    padding-right:0.05rem;

  }
.detailsIn p{
  font-size: 0.12rem;
  color:#cdcdcd;
  margin-top:0.04rem;
  padding-right:0.05rem;
}
.detailRight img{
  width:1.24rem;
  height:0.8rem;
  border-radius: 0.06rem;
  display:block;
}
.detailsLeft .detailCen{
  margin:0 0.08rem;
}

</style>
