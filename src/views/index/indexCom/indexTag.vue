<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in inout" :key="index">
        <div class="box" :style="item.sty">
          <div class="fl produ">
            <p>{{ item.title }}</p>
            <p class="num">{{ item.num }}</p>
            <p>{{ item.num }}<span style="font-size: 14px">与上月相比</span></p>
          </div>
          <div class="fr"><i :class="item.icon" class="icon"></i></div>
          <div class="clear"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    numcolor(num) {
      return "sty" + num;
    },
  },
  data() {
    return {
      inout: [
        {
          title: "本月进件",
          num: 6588,
          percent: "+20.12%",
          icon: "el-icon-tickets",
          sty: { background: "#4c87ff" },
        },
        {
          title: "本月放款（元）",
          num: 121000000,
          percent: "+1.25%",
          icon: "el-icon-money",
          sty: { background: "#f15e74" },
        },
        {
          title: "累计计件",
          num: 128700,
          percent: "+11.48%",
          icon: "el-icon-date",
          sty: { background: "#504eff" },
        },
        {
          title: "累计放款",
          num: 923380079,
          percent: "-2.06%",
          icon: "el-icon-coin",
          sty: { background: "#f4993a" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.box {
  background: royalblue;
  border-radius: 5px;
  height: 130px;
  padding: 20px 0 0 15px;
  box-sizing: border-box;
  margin-top: 5px;
}
.produ {
  color: #fff;
  font-size: 18px;
}
.num {
  margin: 10px 0;
}
.icon {
  font-size: 85px;
  color: #e9eef3;
  margin-right: 10px;
}
</style>