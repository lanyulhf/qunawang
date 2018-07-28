<template>
  <!--住宿攻略-->
  <div class="put">
    <div class="put_top">
      <p>住宿攻略</p>
    </div>
    <div class="put_huadong">
      <div class="put_huadong_one">
        <h4>浦东机场</h4>
        <span>11%游客选择</span>
      </div>
      <div class="put_huadong_one put_huadong_two">
        <h4>南京路步行街</h4>
        <span>5%游客选择</span>
      </div>
      <div class="put_huadong_one put_huadong_three">
        <h4>外滩地区</h4>
        <span>13%游客选择</span>
      </div>
      <div class="put_huadong_one put_huadong_four">
        <h4>人民广场</h4>
        <span>7%游客选择</span>
      </div>
      <div class="put_huadong_one put_huadong_five">
        <h4>虹桥机场</h4>
        <span>4%游客选择</span>
      </div>
      <div class="put_huadong_one put_huadong_six">
        <h4>东方明珠塔</h4>
        <span>4%游客选择</span>
      </div>
    </div>
    <div class="put_bottom">
      <span>320位游客在上海的住宿旅行经验</span>
      <i class="iconfont icon-danjiantouyou youjiantou"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post_put"
    }
</script>

<style scoped>
  .put{
    background: #ffffff;
    margin-bottom: 0.12rem;
  }
.put_top{
  padding:0 0.1rem;
  font-size: 0.16rem;
  line-height: 0.56rem;
}
  .put_top p{
    color: #181818;
  }
  .put_huadong{
    height:0.77rem;
    display: flex;
    padding:0 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
  }
  .put_huadong_one{
    width:1.44rem;
    height: 0.73rem;
    border-radius: 6px;
    font-size: 0.14rem;
    color: #ffffff;
    background: url("../../assets/img/post/put_bj01.jpg");
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    margin-right: 0.1rem;
  }
  .put_huadong_one h4{
    line-height: 0.25rem;
  }
  .put_huadong_one h4,span{
    text-align: center;
  }
  .put_huadong_one span{
    font-size: 0.12rem;
  }
  .put_huadong_two{
    background: url("../../assets/img/post/put_bj02.jpg");
  }
  .put_huadong_three{
    background: url("../../assets/img/post/put_bj03.jpg");
  }
  .put_huadong_four{
    background: url("../../assets/img/post/put_bj04.jpg");
  }
  .put_huadong_five{
    background: url("../../assets/img/post/put_bj05.jpg");
  }
  .put_huadong_six{
    background: url("../../assets/img/post/put_bj06.jpg");
  }
  .put_bottom{
    font-size: 0.12rem;
    line-height: 0.55rem;
    border-top:1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
  }
  .put_bottom span{
    margin-left:0.1rem;
    color: #727272;
    font-size: 0.14rem;
  }
  .youjiantou{
    font-size: 0.14rem;
    color: #9c9c9c;
    margin-right: 0.1rem;
  }
</style>
