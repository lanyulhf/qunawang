<template>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="form.region" placeholder="票种类别">
            <el-option label="出行" value="shanghai"></el-option>
            <el-option label="住宿" value="beijing"></el-option>
            <el-option label="景点" value="shanghai"></el-option>
            <el-option label="娱乐" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>

          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="团购" name="type"></el-checkbox>
            <el-checkbox label="个人" name="type"></el-checkbox>
            <el-checkbox label="亲子游" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="购票方式">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上购票"></el-radio>
            <el-radio label="线下购票"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
      export default {
            name: "popue",
            data() {
              return {
                form: {
                  name: '',
                  region: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
                },
                restaurants: [],
                state3: ''
              }
            },
            methods: {
              onSubmit() {
                console.log('submit!');
              },
              querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
              },
              createFilter(queryString) {
                return (restaurant) => {
                  return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
              },
              loadAll() {
                return [
                  { "value": "桃花岛", "address": "浙江省舟山市普陀区" },
                  { "value": "东方明珠广播电视塔", "address": "上海市浦东新区陆家嘴" },
                  { "value": "外滩", "address": "黄浦江西岸" },
                  { "value": "豫园", "address": "上海市老城厢东北部" },
                  { "value": "上海博物馆", "address": "南京西路325号跑马总会" },
                  { "value": "枪会山", "address": "上海市普陀区棕榈路" }
                ];
              },
              handleSelect(item) {
                console.log(item);
              },
              handleIconClick(ev) {
                console.log(ev);
              }
            },
        mounted() {
          this.restaurants = this.loadAll();
        }
      }
</script>

<style scoped>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }

      .highlighted .addr {
        color: #ddd;
      }
    }
  }
</style>
