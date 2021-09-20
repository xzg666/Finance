<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
      class="menu"
      :router="true"
    >
      <menus v-for="item in menuArr" :key="item.url" :menuItem="item"></menus>
    </el-menu>
  </div>
</template>

<script>
import { get } from "@/utils/http.js";
import menus from "./menus.vue";
export default {
  data() {
    return {
      menuArr: [],
    };
  },
  methods: {
    getMenu() {
      get("/menu").then((res) => {
        console.log(res);
        this.menuArr = res.data;
      });
    },
  },
  mounted() {
    this.getMenu();
  },
  components: {
    menus,
  },
};
</script>

<style  scoped>
.menu{
    height: 100vh;
    width: 100%;
    
}
</style>