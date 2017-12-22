<template>
  <div class="echarts">
    <chart :option="pie" :theme="polarTheme"></chart>
  </div>
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
<style scoped>
.echarts {
    text-align: center;
    border-radius: 6px;
    box-sizing: border-box;
    padding:10px;
    height: 600px;
    width: 100%;
    background-color: #383546;
}
</style>