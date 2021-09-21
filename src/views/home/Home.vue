<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <heads></heads>
        </el-header>
        <el-main>
          <keep-alive :include="AllProduct">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Heads from "./homeCom/Heads.vue";
import navLeft from "./homeCom/navLeft.vue";

export default {
  components: {
    Heads,
    navLeft,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  height: auto;
  color: #333;
  text-align: center;
  overflow: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
