<template>
  <!--特别提醒部分-->
  <div class="remind">
    <div class="remind_box">
      <p>特别提醒</p>
    </div>
    <div class="hua_max">
      <div class="huadong_box">
        <div class="huadong_one">
          <img src="../../assets/img/post/huadong_col.jpg">
          <p>
            "惬意盛夏音乐之夜"作为"2018思南露天夜"的系列活动之一,7月14日至8月25日,
            北京八达岭长城+十三陵定陵或颐和园纯颐和园纯
            <a>查看详情</a>
          </p>
        </div>
      </div>
      <div class="huadong_box">
        <div class="huadong_one">
          <img src="../../assets/img/post/huadong_col.jpg">
          <p>
            "惬意盛夏音乐之夜"作为"2018思南露天夜"的系列活动之一,7月14日至8月25日,
            北京八达岭长城+十三陵定陵或颐和园纯颐和园纯
            <a>查看详情</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post_remind"
    }
</script>

<style scoped>
  .remind{
    display: flex;
    padding-bottom: 0.19rem;
    width:100%;
    background: #ffffff;
  }
.remind_box{
  width:0.24rem;
  height: 0.97rem;
  background: #ff6095;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 0.1rem;
}
  .remind_box p{
    font-size: 0.14rem;
    color:#ffffff;
    padding:0.09rem 0.04rem 0 0.04rem;
  }
  .huadong_box{
    width:3.43rem;
    height: 1rem;
    margin-left: 0.1rem;
    flex-shrink: 0;
  }
  .huadong_one{
    width:3.23rem;
    height: 0.98rem;
    border:1px solid #f0f0f0;
    border-radius: 6px;
    position: relative;
    font-size: 0.14rem;
    box-shadow: 0px 0px 7px 0px #6d6d6d;
  }
  .huadong_one img{
    width:0.03rem;
    height: 0.16rem;
    position: absolute;
    top:18px;
    left:0;
  }
  .huadong_one p{
    margin-left: 0.1rem;
    line-height: 0.22rem;
    margin-top:0.16rem;
    color:#6d6d6d;
  }
  .huadong_one a{
    font-size: 0.14rem;
    color:#1bc7c7;
  }
  .hua_max{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
  }
</style>
