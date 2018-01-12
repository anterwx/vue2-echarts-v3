<template>
  <el-container>
    <el-header>
      <el-button type="primary" round @click="doRandom">加载数据</el-button>
    </el-header>
    <el-main>
      <chart :option="bar" :theme="polarTheme" :loading="loading" @ready="onReady" @click="onClick"></chart>
    </el-main>
  </el-container>
</template>

<script type="text/babel">
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import "echarts/theme/dark";

import barOptions from "./bar";

export default {
  name: "view",
  components: {
    chart: IEcharts
  },
  props: {},
  data: () => ({
    loading: false,
    polarTheme: "dark",
    bar: barOptions
  }),
  methods: {
    doRandom() {
      this.loading = true;
      setTimeout(() => {
        let data = [];
        for (let i = 0, min = 5, max = 999; i < 7; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        this.bar.series[0].data = data;
        this.loading = false;
      }, 500);
    },
    onReady(instance) {
      console.log(instance);
    },
    onClick(event, instance, echarts) {
      console.log(arguments);
    }
  }
};
</script>