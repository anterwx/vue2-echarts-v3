<template>
  <el-container class="el-container">
      <el-main>
          <h1 v-html="msg"></h1>
          <logo-component></logo-component>
          <ul>
              <li><router-link to="/logo">svg实现动态logo</router-link></li>
              <li><router-link to="/page">vue-router简单跳转</router-link></li>
              <li><router-link to="/movie">vue-resource访问后台API</router-link></li>
              <li><router-link to="/bar">vue-echarts-v3-bar</router-link></li>
              <li><router-link to="/pie">vue-echarts-v3-pie</router-link></li>
              <li><router-link to="/radar">vue-echarts-v3-radar</router-link></li>
              <li><router-link to="/mixined">vue-echarts-v3-mixined</router-link></li>
              <li><router-link to="/circleRun">vue-echarts-v3-circleRun</router-link></li>
          </ul>
          <router-view class="view"></router-view>
      </el-main>
  </el-container>
</template>
<script>
import LogoComponent from "./component/echarts/logo/LogoComponent.vue";
export default {
  components: {
    LogoComponent
  },
  data: () => ({
    msg: "Hello Vue & Echarts-v3!"
  })
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.el-container {
  position: relative;
  z-index: 10;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.el-container h1{
  text-align: center;
}
.view {
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
}
</style>
