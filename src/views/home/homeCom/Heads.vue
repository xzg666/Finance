<template>
  <div class="clearfix headbox">
    <div class="produce fl">
      <span>{{ nickname }}</span>
      你好，这是你来到字节跳动的第
      <span class="days">{{ days }}</span>
      天
    </div>
    <div class="fr">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人信息</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { parseInfo } from "@/utils/getinfo.js";
import { get } from "@/utils/http.js";

export default {
  computed: {
    nickname() {
      return parseInfo().nickname;
    },
  },
  data() {
    return {
      days: "",
    };
  },
  mounted() {
    this.getDays();
  },
  methods: {
    getDays() {
      get("/in").then((res) => {
        // console.log(res)
        let target = new Date(res.time);
        let now = new Date();
        // console.log(now-target)
        this.days = Math.floor((now - target) / 1000 / 60 / 60 / 24);
        //     console.log(788,this.days)
      });
    },
    handleCommand(index){
        if(index == 'c'){
            sessionStorage.clear()
            this.$router.push('/login')
        }
    }
  },
};
</script>

<style  scoped>
.headbox{
    width: 100%;
}
.produce {
  font-size: 20px;
}
.days {
  color: #409EFF;
  font-size: 25px;
}
</style>