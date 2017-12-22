<template>
    <div class="logo">
      <chart :option="logo"></chart>
    </div>
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

<style scoped>
.logo {
  height: 100px;
}
</style>