<template>
  <el-container>
    <el-main>
      <chart :option="pie" :theme="polarTheme"></chart>
    </el-main>
  </el-container>
</template>
<script>
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/chart/pie";
import "echarts/theme/dark";

import pieOptions from "./pie";

export default {
  components: {
    chart: IEcharts
  },
  data: () => ({
    polarTheme: "dark",
    pie: pieOptions
  })
};
</script>