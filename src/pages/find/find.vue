<template>
    <div class="find" v-cloak>
        <div class="findTop">
            <i class="iconfont icon-prev"></i>
            <span>趣浪</span>
            <i class="iconfont icon-tubiaolunkuo-"></i>
        </div>
        <findmock></findmock>
    </div>
</template>

<script>

    import Findmock from '../../components/find/findmock'
      export default {
            name: "find",
            components:{
                Findmock
            },
            methods:{
            }
      }
</script>

<style scoped>
.find{
    font-size: 0.1rem;
    width: 100%;
}
  .findTop{
      height:0.45rem ;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.2rem 0 0.2rem;
  }
  .findTop .iconfont{
      font-size: 22px;
      color:#3a3a3a;
  }
  .findTop span{
    font-size:20px ;
    color:#000;
  }

</style>
