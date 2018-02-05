<template>
  <chart :options='mixined' ref='mixined' auto-resize @click='onClick'></chart>
</template>
<script>
import Echarts from "../EchartsComponent.vue";
import { option as mixined, asysnOption } from "./radarLinear";
export default {
  components: {
    chart: Echarts
  },
  data: () => ({
    mixined
  }),
  methods: {
    // 点击事件
    onClick(event) {
      // 获取对象
      let params = arguments[0];
      // 点击折线节点触发
      if (params.componentType === "series" && params.seriesType === "line") {
        var dataIndex = params.dataIndex;
        // 更新雷达图配置，mergeOptions是Echarts组件定义方法，异步合并配置的功能
        this.$refs.mixined.mergeOptions(asysnOption(dataIndex));
      }
    }
  }
};
</script>