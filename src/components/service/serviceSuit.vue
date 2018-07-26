<template>
    <div class="serviceSuit">
        <p class="commonService">常见问题</p>
        <ul class="Uls">
            <li class="one">
                <img src="../../assets/img/service/c1.png" alt="">
                <p>返现金额如何提现</p>
            </li>
            <li>
                <img src="../../assets/img/service/c1.png" alt="">
                <p>账户安全险问题</p>
            </li>
            <li>
                <img src="../../assets/img/service/c1.png" alt="">
                <p>找不到订单</p>
            </li>
            <li>
                <img src="../../assets/img/service/c2.png" alt="">
                <p>火车票退票手续费怎么算</p>
            </li>
            <li>
                <img src="../../assets/img/service/c3.png" alt="">
                <p>到店无法入住</p>
            </li>
            <li>
                <img src="../../assets/img/service/c4.png" alt="">
                <p>司机爽约/迟到</p>
            </li>
            <li>
                <img src="../../assets/img/service/c1.png" alt="">
                <p>如何绑定/解绑银行卡</p>
            </li>
        </ul>
    </div>
</template>

<script>
      export default {
            name: "serviceSuit"
      }
</script>

<style scoped>
  .serviceSuit{
      font-size: 0.1rem;
  }
  .commonService{
      width: 100%;
      font-size:12px ;
      background: #edeef0;
      color:#a1a2a4;
      line-height: 0.44rem;
      padding-left: 0.11rem;
  }
  .Uls li{
      width: 100%;
      overflow: hidden;
      clear: both;
      margin-left: 0.1rem;
      height: 0.43rem;
      border-top:0.01rem solid #eeeeee ;
      border-bottom:0.01rem solid  #f7f7f7;
  }
  .Uls li img,.Uls li p{
      float: left;
      overflow: hidden;
  }
  .Uls li img{
      margin-top: 0.12rem;
  }
  .Uls li p{
      margin-top:0.13rem ;
      margin-left: 0.1rem;
  }
  .Uls .one{
      border-top: 0;
  }
</style>
