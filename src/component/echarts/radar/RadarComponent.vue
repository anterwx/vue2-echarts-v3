<template>
    <div class="echarts">
        <chart :options="radar" auto-resize></chart>
    </div>
</template>
<script>
import Echart from "../EchartsComponent.vue";
import radar from "./radar";
export default {
  components: {
    chart: Echart
  },
  data: () => ({
    radar
  })
};
</script>
<style scoped>
.echarts {
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #39273d;
  height: 600px;
}
</style>