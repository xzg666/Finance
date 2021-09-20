<template>
  <div>
    <el-menu-item v-if="!menuItem.children" :index="menuItem.url">
      <i :class="menuItem.icon"></i>
      <span slot="title">{{menuItem.name}}</span>
    </el-menu-item>

    <el-submenu v-else :index="menuItem.url">
        <template slot="title">
          <i :class="menuItem.icon"></i>
          <span>{{menuItem.name}}</span>
        </template>
        <menu-child v-for="item2 in menuItem.children" :key="item2.url" :menuItem="item2"></menu-child>
    </el-submenu>
  </div>
</template>

<script>
export default {
    name:"MenuChild",
  props: {
    menuItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
</style>