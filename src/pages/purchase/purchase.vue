<template>
    <div>
      <P>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">购票管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>购票列表</el-breadcrumb-item>
        </el-breadcrumb>
      </P>
      <div class="inp">
        <el-input class="elinp" v-model="input" placeholder="请输入内容"></el-input>
        <el-button class="btn" type="primary">查询</el-button>
        <el-button type="text" @click="dialogVisible = true">
          <el-button type="primary">新增</el-button>
        </el-button>
        <el-dialog
          title="新增"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose">
          <popue></popue>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
          </span>
        </el-dialog>

      </div>
      <purchaser></purchaser>
    </div>
</template>

<script>
  import  Purchaser from  '../../components/purchaser/purchaser'
  import  Popue from '../../components/purchaser/popue'

      export default {
            name: "purchase",
            components:{
              Popue,
              Purchaser
            },
            data() {
              return {
                dialogVisible: false
              };
            },
            methods: {
              handleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                    done();
                  })
                  .catch(_ => {});
              }
            }

      }
</script>

<style scoped>
  body{
      width: 80%;
  }
  .elinp{
      width: 200px;
      margin-right: 10px;
  }
  .btn{
      height:40px ;
  }
  .inp{
     display: flex;
      align-items: center;
  }
</style>
