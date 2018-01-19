let obj = [{
    name: '北京市海淀区实验中学',
    total: 285,
    pc: 125,
    mobile: 0,
    admin: 130
}, {
    name: '北京市第二十中学',
    total: 320,
    pc: 0,
    mobile: 50,
    admin: 270
}, {
    name: '首都师范大学附属育新学校',
    total: 136,
    pc: 6,
    mobile: 0,
    admin: 130
}, {
    name: '郑州市郑东新区龙岗小学',
    total: 610,
    pc: 0,
    mobile: 50,
    admin: 270
}]
let schoolData = [
    '北京市海淀区实验中学',
    '北京市第二十中学',
    '首都师范大学附属育新学校',
    '郑州市郑东新区龙岗小学',
    '郑州市第三十一中学',
    '北京市第五十七中学',
    '北京实验学校',
    '北京市海淀实验中学',
    '郑州外国语学校',
    '郑州第三十一中学'
    // '清华大学附属中学奥森校区',
    // '海淀实验中学',
    // '北京市美育中学',
    // '上海大学附属中学',
    // '南京市西善桥中学',
    // '北京市崇文门中学',
    // '郑州市第四中学',
    // '黄淮学院',
    // '上海复旦大学附属中学',
    // '北京市双桥中学',
    // '郑州市第十一中学',
    // '中国人民大学附属中学',
    // '上海市南洋模范中学'
];

// let sumData = [285, 320, 136, 610, 160, 420, 850, 436, 610, 760, 490, 1050, 356, 610, 560, 420, 950, 950, 836, 610, 160, 420, 1150];
let sumData = [285, 320, 136, 610, 160, 420, 850, 436, 610, 760];

let data = {
    pc: [125, 0, 76, 200, 60, 200, 650, 36, 110, 60],
    mobile: [30, 50, 0, 100, 100, 120, 200, 0, 200, 0],
    admin: [130, 270, 60, 300, 0, 100, 0, 400, 300, 700]
}

export default {
    backgroundColor: "#383546",
    title: {
        text: '人数统计',
        left: 'center',
        top: 10
    },
    grid: {
        left: 30,
        right: 30,
        bottom: 40,
        containLabel: true
    },
    legend: {
        left: 'center',
        bottom: 0,
        textStyle: {
            color: '#90979c',
        },
        data: ['PC端注册', '移动端注册', '管理端导入', '总人数']
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        }
    },
    yAxis: [{
        type: 'category',
        splitNumber: 0,
        axisLine: {
            show: false,
            lineStyle: {
                opacity: 0.2
            }
        },
        axisLabel: {
            color: 'gray',
            padding: [0, 10, 0, 0]
        },
        axisTick: {
            length: 0,
            lineStyle: {
                color: 'gray',
                width: 2
            }
        },
        data: schoolData
    }],
    xAxis: [{
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                opacity: 0.2
            }
        },
        axisLabel: {
            color: 'gray'
        },
        axisTick: {
            show: false,
            length: 0,
            lineStyle: {
                color: 'gray',
                width: 2
            }
        },
        splitNumber: 4,
        splitLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#fff',
                opacity: 0.1
            }
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: 'PC端注册',
            type: 'bar',
            stack: '人数',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: "#f5b44d"
                            },
                            {
                                offset: 1,
                                color: "#1c98e8"
                            }
                        ]
                    },
                    barBorderRadius: 100,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#9EA7C4"
                    },
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            },
            data: data.pc
        },
        {
            name: '移动端注册',
            type: 'bar',
            stack: '人数',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: "#1c98e8"
                            },
                            {
                                offset: 1,
                                color: "#28f8de"
                            }
                        ]
                    },
                    barBorderRadius: 100,
                    borderWidth: 0,
                    borderColor: '#333'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#ffffff"
                    },
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            },
            data: data.mobile
        },
        {
            name: '管理端导入',
            type: 'bar',
            stack: '人数',
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
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
                    barBorderRadius: 100,
                    borderWidth: 0,
                    borderColor: '#333'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#ffffff"
                    },
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            },
            data: data.admin
        },
        {
            name: '总人数',
            type: 'line',
            stack: '人数',
            symbolSize: 10,
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: 100,
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "#f5b44d"
                            },
                            {
                                offset: 1,
                                color: "#28f8de"
                            }
                        ]
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                        color: "#9EA7C4"
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: "#1c98e8"
                            },
                            {
                                offset: 1,
                                color: "#28f8de"
                            }
                        ]
                    },
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "rgba(35,184,210,.2)"
                            },
                            {
                                offset: 1,
                                color: "rgba(35,184,210,0)"
                            }
                        ]
                    }
                }
            },
            data: sumData
        }
    ]
}