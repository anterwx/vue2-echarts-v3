<template>
  <div>
    <el-button type="danger" round @click="doRandom">模拟加载数据...</el-button>
    <div class="echarts">
      <chart :option="bar" :theme="polarTheme" :loading="loading" @ready="onReady" @click="onClick"></chart>
    </div>
  </div>
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
<style scoped>
.echarts {
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #383546;
  height: 600px;
}
</style>