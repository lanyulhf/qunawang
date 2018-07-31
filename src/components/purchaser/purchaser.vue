<template>
  <el-table
    :data="tableData4"
    style="width: 100%"
    max-height="250">
    <el-table-column type="selection" width="65">
    </el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="170">
    </el-table-column>
    <el-table-column
      prop="province"
      label="类别"
      width="150">
    </el-table-column>
    <el-table-column
      prop="city"
      label="订票日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="type"
      label="购票方式"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData4: [{
          date: '2016-05-03',
          name: '乐华城',
          province: '娱乐',
          city: '2016-10-09',
          zip:'个人',
          type:'线上购票'
        }]
      }
    }
  }
</script>
