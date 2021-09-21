<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索选项 -->
    <el-card class="mt">
      <el-row>
        <el-col :span="6">
          产品名称：
          <el-input
            placeholder="产品名称"
            v-model="option.name"
            clearable
            style="width: 70%"
          ></el-input>
        </el-col>
        <el-col :span="6">
          利率：
          <el-input
            placeholder="利率"
            v-model="option.rate"
            clearable
            style="width: 80%"
          >
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-date-picker
            v-model="option.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-button type="primary" style="margin-left: 10px" @click="search" size="mini"
            >查询</el-button
          >
          <el-button type="primary" size="mini">重置</el-button>
          <span class="mores" v-show="!more" @click="more = !more">
            展开
            <i class="el-icon-arrow-down"></i>
          </span>
          <span class="mores" v-show="more" @click="more = !more">
            收起
            <i class="el-icon-arrow-up"></i>
          </span>
        </el-col>
      </el-row>
      <el-row class="mt" v-show="more">
        <el-col :span="6">
          类型：
          <el-input
            placeholder="类型"
            v-model="option.type"
            clearable
            style="width: 70%"
          ></el-input>
        </el-col>
        <el-col :span="6">
          状态：
          <el-input
            placeholder="状态"
            v-model="option.status"
            clearable
            style="width: 80%"
          >
          </el-input>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表格 -->
    <el-card class="mt">
      <el-table :data="tabData" stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="name" label="产品名称" width="150">
        </el-table-column>
        <el-table-column prop="type" label="类别" width="140">
        </el-table-column>
        <el-table-column prop="rate" label="利率" width="120">
        </el-table-column>
        <el-table-column prop="date" label="开发日期" width="140">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="140">
          <template slot-scope="scope">
            <el-button type="success" size="mini" v-if="scope.row.status == 1"
              >启用</el-button
            >
            <el-button type="danger" size="mini" v-else>禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="highest" label="最高分期数（月）" width="150">
        </el-table-column>
        <el-table-column prop="number" label="申请客户量" width="160">
        </el-table-column>
        <el-table-column prop="total" label="累计签约金额" width="180">
        </el-table-column>
        <el-table-column prop="average" label="件均" width="140">
        </el-table-column>
        <el-table-column prop="remark" label="操作" width="250">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" v-if="scope.row.status !== 1"
              >启用</el-button
            >
            <el-button type="danger" size="mini" v-else>禁用</el-button>
            <el-button type="primary" size="mini" @click="detail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 页码 -->

      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="option.current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="option.total"
        style="text-align:right"
        class="mt"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
import moment from "moment";
import { get } from "@/utils/http.js";
import {mapMutations} from 'vuex'

export default {
    name:"AllProduct",
  mixins: [breadCrumb],
  data() {
    return {
      option: {
        name: "",
        rate: "",
        date: "",
        type: "",
        status: "",
        startDate: "",
        endDate: "",
        total: 100,
        current: 1,
        pageSize: 10,
      },
      more: false,
      tabData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    search() {
      console.log("option", this.option);
      console.log(moment(this.option.date[0]).format("YYYY-MM-DD"));
    },
    //封装请求函数
    getData() {
      this.option.startDate = moment(this.option.date[0]).format("YYYY-MM-DD");
      this.option.endDate = moment(this.option.date[1]).format("YYYY-MM-DD");
      get("/productList").then((res) => {
        console.log("表格数据", res);
        this.tabData = res.data.list;
      });
    },
    handleSizeChange(val) {
      console.log("页码大小改变", val);
      this.getData();
    },
    handleCurrentChange(val) {
      console.log("现在页码", val);
      this.option.pageSize = val;
      this.getData();
    },
    ...mapMutations(["getRowData"]),
    detail(row){
        this.$router.push('/product/detail')
        this.getRowData(row)

    }
  },
};
</script>

<style  scoped>
.el-col {
  text-align: left;
}
.mores {
  color: #409eff;
}
</style>