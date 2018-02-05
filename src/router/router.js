import VueRouter from 'vue-router'
import PageComponent from '../component/PageComponent.vue'
import MovieComponent from '../component/movie/MovieComponent.vue'
import BarComponent from '../component/echarts/bar/BarComponent.vue'
import PieComponent from '../component/echarts/pie/PieComponent.vue'
import LogoComponent from '../component/echarts/logo/LogoComponent.vue'
import MixinedComponent from '../component/echarts/mixined/MixinedComponent.vue'
import CircleRunComponent from '../component/echarts/mixined/CircleRunComponent.vue'
import RadarComponent from '../component/echarts/radar/RadarComponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/vue/logo',
    component: LogoComponent
  }, {
    path: '/vue/',
    component: PageComponent
  }, {
    path: '/vue/movie',
    component: MovieComponent
  }, {
    path: '/vue/bar',
    component: BarComponent
  }, {
    path: '/vue/pie',
    component: PieComponent
  }, {
    path: '/vue/mixined',
    component: MixinedComponent
  }, {
    path: '/vue/circleRun',
    component: CircleRunComponent
  }, {
    path: '/vue/radar',
    component: RadarComponent
  }]
})
