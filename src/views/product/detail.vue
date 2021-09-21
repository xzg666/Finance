<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 主体 -->
    <el-card class="mt" style="text-align: left !important">
      <el-button type="primary" @click="back">返回</el-button>
      <table class="mt">
        <span
          v-for="(value, key, index) in rowData"
          :key="index"
          class="tabItem"
        >
          <tr>
            <th>{{ key }}</th>
            <td>{{ value }}</td>
          </tr>
        </span>
      </table>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
import { mapState } from "vuex";
export default {
  mixins: [breadCrumb],
  computed: {
    ...mapState(["rowData"]),
  },
  mounted() {
    console.log(this.rowData);
  },
  methods: {
    back() {
      this.$router.push("/product/all");
    },
  },
};
</script>

<style  scoped>
.tabItem td,.tabItem th {
  width: 200px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: gray 1px solid;
  border-left: 0;
  border-top: 0;
  box-sizing: border-box;
}
.tabItem th {
  /* border: black 1px solid; */
  background-color: #DCDFE6;
  
}
table {
 border-collapse: collapse;
 border-top: gray 1px solid;
 border-left: gray 1px solid;
 width: 1603.2px;
 box-sizing: border-box;
  
}
</style>