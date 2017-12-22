import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
//使用axios替代vue-resource
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.prototype.$http = axios;//axios不是插件，关联到Vue的原型链上

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/router";

Vue.use(Element);
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(VueAxios, axios);

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')