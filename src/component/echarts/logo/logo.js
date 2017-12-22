import logo from 'raw-loader!../../../assets/kiwi.svg'

let d = logo.match(/\bd="([^"]+)"/)[1]

export default {
    series: [{
        type: 'liquidFill',
        data: [0.75, 0.65, 0.55, 0.5],
        amplitude: 6,
        outline: {
            show: false
        },
        radius: '100%',
        color: ['#4fc08d', '#44d64a', '#33c762', '#4acc80'],
        backgroundStyle: {
            color: '#fff',
            borderColor: '#2c3e50',//'#2c3e50'
            borderWidth: 1
        },
        shape: `path://${d}`,
        label: {
            normal: {
                formatter() {
                    return ''
                }
            }
        }
    }]
}