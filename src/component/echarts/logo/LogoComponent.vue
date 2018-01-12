<template>
  <el-container>
    <chart :option="logo"></chart>
  </el-container>
</template>
<script>
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts-liquidfill";
import logoSvg from "./logo";

export default {
  components: {
    chart: IEcharts
  },
  data: () => ({
    logo: logoSvg
  })
};
</script>