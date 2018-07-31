<template>
    <div>
      <div class="hStatistic">
        <H-statistic-left></H-statistic-left>
        <statistic-right></statistic-right>
       <statistic-bot-let></statistic-bot-let>
       <statistic-bot-rig></statistic-bot-rig>
      </div>
    </div>
</template>

<script>
    import HStatisticLeft from "./hStatisticLeft";
    import StatisticRight from "./StatisticRight";
    import StatisticBotLet from "./StatisticBotLet";
    import StatisticBotRig from "./StatisticBotRig";
    export default {
        name: "hStatistic",
      components: {StatisticBotLet, StatisticRight, HStatisticLeft,StatisticBotRig}
    }
</script>

<style scoped>
  /* hStatistic部分 */
  .hStatistic{
    width:100%;
    display:-webkit-flex;
    /* -webkit-flex-direction:column; */
    -webkit-flex-wrap:wrap;
    box-sizing: border-box;
  }

  @media screen and (max-width: 1200px){
    .hsmallBox .hsmallBoxIn{
      width: 50%;
      margin-bottom:24px;
    }

  }
  @media screen and (max-width: 760px){
    .hsmallBox .hsmallBoxIn{
      width: 100%;
      margin-bottom:24px;
    }
    .hTheme{
      -webkit-flex-direction:column;
      -webkit-justify-content:space-around;
    }
    .themeLeft{
      text-align: center;
    }
    .themeRight{
      text-align: center;
    }

  }
  @media screen and (max-width:760px){
    .hContent .hcRight{
      width:100%;
      height:100%;
    }
    .hContent .hcleft{
      width:10%;
      height:100%;
    }

  }
  @media screen and (max-width:1200px){
    .hStatistic .hStatisticLeft{
      width:100%;
      height:100%;
    }
    .hContent .StatisticRight{
      width:100%;
      height:100%;
    }

  }


</style>
