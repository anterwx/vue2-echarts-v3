<template>
    <div class="echarts"></div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import debounce from "lodash.debounce";
import { radarData, radarDataAvg, color, option } from "./radarLinear";

export default {
  props: {
    options: Object,
    theme: [String, Object],
    initOptions: Object,
    group: String
  },
  data() {
    return {
      chart: null,
      autoResize: true
    };
  },
  methods: {
    init() {
      if (this.chart) {
        return;
      }
      let chart = echarts.init(this.$el, this.theme, this.initOptions);

      if (this.group) {
        chart.group = this.group;
      }

      chart.setOption(option, true);

      // 点击事件
      chart.on("click", function(params) {
        if (params.componentType === "series" && params.seriesType === "line") {
          var dataIndex = params.dataIndex;
          chart.setOption({
            series: [
              {
                name: "每日跑步指标分布与比较",
                type: "radar",
                symbolSize: 0,
                data: [
                  {
                    name: "平均指标",
                    value: radarDataAvg[dataIndex],
                    itemStyle: {
                      normal: {
                        color: "#f8d351"
                      }
                    },
                    lineStyle: {
                      normal: {
                        opacity: 0
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: "#f8d351",
                        shadowBlur: 25,
                        shadowColor: "rgba(248,211,81,.3)",
                        shadowOffsetX: 0,
                        shadowOffsetY: -10,
                        opacity: 1
                      }
                    }
                  },
                  {
                    name: "我的指标",
                    value: radarData[dataIndex],
                    itemStyle: {
                      normal: {
                        color: "#43dfa2"
                      }
                    },
                    lineStyle: {
                      normal: {
                        opacity: 0
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: color.linearGtoB,
                        shadowBlur: 15,
                        shadowColor: "rgba(0,0,0,.2)",
                        shadowOffsetX: 0,
                        shadowOffsetY: 5,
                        opacity: 0.8
                      }
                    }
                  }
                ]
              }
            ]
          });
        }
      });
      if (this.autoResize) {
        this.__resizeHanlder = debounce(
          () => {
            chart.resize();
          },
          100,
          { leading: true }
        );
        window.addEventListener("resize", this.__resizeHanlder);
      }
      this.chart = chart;
    },
    destroy() {
      if (this.autoResize) {
        window.removeEventListener("resize", this.__resizeHanlder);
      }
      this.chart = null;
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    if (this.autoResize) {
      this.chart && this.chart.resize();
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.destroy();
  }
};
</script>
<style scoped>
.echarts {
  text-align: center;
  border-radius: 6px;
  box-sizing: border-box;
  height: 600px;
  width: 100%;
  background-color: #383546;
}
</style>

