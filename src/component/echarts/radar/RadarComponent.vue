<template>
  <chart :options="radar" auto-resize></chart>
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