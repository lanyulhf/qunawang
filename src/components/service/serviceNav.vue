<template>
    <div>
        <ul class="uls">
            <li>
                <img src="../../assets/img/service/s1.png" alt="">
                <span>机票问题</span>
            </li>
            <li>
                <img src="../../assets/img/service/s2.png" alt="">
                <span>酒店问题</span>
            </li>
            <li>
                <img src="../../assets/img/service/s3.png" alt="">
                <span>火车票问题</span>
            </li>
            <li>
                <img src="../../assets/img/service/s4.png" alt="">
                <span>门票问题</span>
            </li>
        </ul>
      <ul class="uls uls2">
          <li>
              <img src="../../assets/img/service/s5.png" alt="">
              <span>度假问题</span>
          </li>
          <li>
              <img src="../../assets/img/service/s6.png" alt="">
              <span>用车问题</span>
          </li>
          <li>
              <img src="../../assets/img/service/s7.png" alt="">
              <span>账号问题</span>
          </li>
          <li>
              <img src="../../assets/img/service/s8.png" alt="">
              <span>其他</span>
          </li>
      </ul>
    </div>
</template>

<script>
      export default {
            name: "serviceNav"
      }
</script>

<style scoped>
  @import "../../../static/css/iconfont.css";
  .uls{
      font-size:12px ;
      color:#a7a7a7;
      width: 2.9rem;
      align-items: center;
      margin: 0.15rem auto 0;
      display: flex;
      justify-content: space-between;
  }
  .uls li{
      width: 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .uls li span{
      margin-top: 0.05rem;
  }
  .uls2{
      margin-bottom: 0.15rem;
  }
</style>
