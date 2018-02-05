<template>
  <chart :options='pie' auto-resize></chart>
</template>
<script>
import Echarts from "../EchartsComponent.vue";
import pieOptions from "./pie";

export default {
  components: {
    chart: Echarts
  },
  data: () => ({
    pie: pieOptions
  })
};
</script>