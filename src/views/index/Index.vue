<template>
  <div>
    <index-tag></index-tag>
    <el-row :gutter="20" class="mt">
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <draw-trend></draw-trend>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <lei-da></lei-da>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt">
      <el-col :span="12">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="12">
        <el-calendar v-model="value"> </el-calendar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import indexTag from "./indexCom/indexTag.vue";
import drawTrend from "./indexCom/drawTrend.vue";
import leiDa from "./indexCom/leiDa.vue";
export default {
  components: {
    indexTag,
    drawTrend,
    leiDa,
  },
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style  scoped>
</style>