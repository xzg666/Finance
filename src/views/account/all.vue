<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="mt">
      <el-col :span="24">
        <el-card>
          <div class="clearfix">
            <div class="fl">
              <div>
                <el-input placeholder="请输入内容" v-model="input">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
            <div class="fr">
              <el-button type="primary" @click="toShow({})">新建角色</el-button>
              <el-button :disabled="disable">启动</el-button>
              <el-button :disabled="disable">冻结</el-button>
              <el-button :disabled="disable">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-card class="mt">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="序号" width="80"> </el-table-column>
        <el-table-column prop="account" label="账号" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="character" label="角色" width="180">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="350">
        </el-table-column>
        <el-table-column prop="remark" label="原因" width="350">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="150">
          <template slot-scope="scope">
            {{ scope.row.status == 1 ? "启用" : "禁用" }}
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="操作" width="250">
          <template slot-scope="scope">
            <el-button size="mini" @click="toShow(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini">禁用</el-button>
            <el-button size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹框 -->
    <add-new :show.sync="show"></add-new>
  </div>
</template>

<script>
import breadcrumb from "@/mixins/breadCrumb";
import { get } from "@/utils/http.js";
import addNew from "./module/module.vue";
import {mapMutations} from 'vuex'
export default {
  mixins: [breadcrumb],
  data() {
    return {
      input: "",
      tableData: [],
      disable: true,
      show: false,
    };
  },
  methods: {
    getAllData() {
      get("/all").then((res) => {
        console.log("all", res.data);
        this.tableData = res.data.list;
      });
    },
    handleSelectionChange(choose) {
      //   console.log("eval", choose.length);
      this.disable = !choose.length;
    },
    toShow(row) {
      this.show = true;
      console.log(1,row);
      this.getRowData(row)
    },
    ...mapMutations(["getRowData"])

  },
  mounted() {
    this.getAllData();
  },
  components: {
    addNew,
  },
};
</script>

<style  scoped>
.input {
  width: 20%;
}
.el-card {
  padding: 5px 5px 15px 5px;
}
</style>