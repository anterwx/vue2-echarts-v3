<template>
  <el-container class="el-container">
    <el-header style="position:absolute;top:0;right:0;padding:10px;z-index:20;">
      <el-dropdown>
        <span class="el-dropdown-link">
          切换<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/logo">svg实现动态logo</router-link>
            </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/page">vue-router简单跳转</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/movie">vue-resource访问后台API</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/bar">vue-echarts-v3-bar</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/pie">vue-echarts-v3-pie</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/radar">vue-echarts-v3-radar</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/mixined">vue-echarts-v3-mixined</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/circleRun">vue-echarts-v3-circleRun</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main class="main">
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
  background-color: #383546;
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
.main{
  padding:0;
}
.view {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  background-color: #383546;
}
</style>
