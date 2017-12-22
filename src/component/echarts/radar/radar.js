export default {
    title: {
        left: 'center',
        text: '霍兰德职业兴趣量表',
        textStyle: {
            color: '#FFF',
            fontSize: 25
        }
    },
    tooltip: {},
    legend: {
        top: 50,
        itemWidth: 12,
        itemHeight: 12,
        data: ['预测指标', '实际指标'],
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    radar: {
        radius: '50%',
        splitNumber: 8,
        textStyle: {
            color: '#FFF',
            fontSize: 20
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                opacity: .2
            }
        },
        splitLine: {
            lineStyle: {
                color: '#fff',
                opacity: .2
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            }
        },
        indicator: [{
            name: 'A艺术',
            max: 6000
        }, {
            name: 'S社会',
            max: 16000
        }, {
            name: 'E企业',
            max: 30000
        }, {
            name: 'C常规',
            max: 35000
        }, {
            name: 'R实际',
            max: 50000
        }, {
            name: 'I调研',
            max: 25000
        }]
    },
    series: [{
        name: '预测 vs 实际',
        type: 'radar',
        symbolSize: 0,
        data: [{
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: '预测指标',
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
        }, {
            value: [2500, 12000, 8000, 8500, 12000, 12000],
            name: '实际指标',
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
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: "#43dfa2"
                            },
                            {
                                offset: 1,
                                color: "#28f8de"
                            }
                        ]
                    },
                    shadowBlur: 15,
                    shadowColor: "rgba(0,0,0,.2)",
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                    opacity: 0.8
                }
            }
        }]
    }],
    color: ['#ef4b4c', '#b1eadb'],
    backgroundColor: {
        type: 'radial',
        x: 0.4,
        y: 0.4,
        r: 0.35,
        colorStops: [{
            offset: 0,
            color: '#895355' // 0% 处的颜色
        }, {
            offset: .4,
            color: '#593640' // 100% 处的颜色
        }, {
            offset: 1,
            color: '#39273d' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
};