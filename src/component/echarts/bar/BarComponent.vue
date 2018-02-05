<template>
  <chart :options='bar' theme='dark'  @click='onClick' auto-resize></chart>
</template>
<script>
import Echarts from "../EchartsComponent.vue";
import barOptions from "./bar";

export default {
  components: {
    chart: Echarts
  },
  props: {},
  data: () => ({
    bar: barOptions
  }),
  methods: {
    doRandom() {
      setTimeout(() => {
        let data = [];
        for (let i = 1, min = 5, max = 999; i < 24; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        this.bar.series[0].data = data.sort((a, b) => {
          return a - b;
        });
      }, 500);
    },
    onClick(event, instance, echarts) {
      this.doRandom();
    }
  }
};
</script>