<template>
    <div>
      <div class="header">
        <a href=""><span>西安</span><span><i class="iconfont icon-icon1"></i></span></a>
        <a href="javascript:">
          <span class="search"><i class="iconfont icon-sousuo"></i></span>
          <input type="text" placeholder="如家快捷酒店北京...">
        </a>
        <a href=""><i class="iconfont icon-xinxi"></i></a>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
  .header{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0.1rem;
    box-sizing: border-box;
  }
  .header a{
    color:#626262;
    font-size:0.16rem;
  }
  .header a:nth-child(1){
    display: flex;
  }

  .header a:nth-child(2){
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    display: flex;
    align-items: center;
    background: #f0f0f0;
    border-radius: 0.15rem;
  }
  .header a .iconfont{
    font-size:0.22rem;
  }
  .header input{
    border:0 solid #000;
    color:#626262;
    text-indent: 0.04rem;
    background: #f0f0f0;
    margin-left:0.04rem;
    padding: 0 0.15rem ;
    outline: none;
    line-height:0.34rem;
    background: url(../../assets/img/index/headerPic1.png) no-repeat right center;
  }
  input::-webkit-input-placeholder{
    color: #626262;
    font-size:0.16rem;
  }
  input::-moz-placeholder{
  color: #626262;
    font-size:0.16rem;
  }
  input:-ms-input-placeholder{
  color: #626262;
    font-size:0.16rem;
  }
</style>
