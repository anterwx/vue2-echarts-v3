export default {
    backgroundColor: "#383546",
    title: {
        text: '网站访问量',
        left: 'center',
        top: '10'
    },
    tooltip: {},
    xAxis: {
        data: ['一', '二', '三', '四', '五', '六','七']
    },
    yAxis: {},
    series: [{
        name: '访问量',
        type: 'bar',
        color: ['#27acad'],
        data: [85, 320, 136, 610, 160, 420,950]
    }]
}