<template>
  <el-container>
    <el-main>
      <!-- <el-row type='flex'>
        <el-col :span='24'>
          <logoComponent></logoComponent>
        </el-col>
      </el-row> -->
      <el-row type='flex' style='height:100%;wdith:100%;'>
        <el-col :span='12' style='height:100%;'>
          <barComponent style='height:100%;'></barComponent>
        </el-col>
        <el-col :span='12' style='height:100%;'>
          <el-row type='flex' style='height:50%;'>
            <el-col :span='24'>
              <pieComponent style='height:100%;'></pieComponent>
            </el-col>
            <!-- <el-col :span='24'>
              <radarComponent style='height:100%;'></radarComponent>
            </el-col> -->
          </el-row>
          <el-row type='flex' style='height:50%;'>
            <el-col :span='24'>
              <radarComponent style='height:100%;'></radarComponent>
              <!-- <circleRunComponent style='height:100%;'></circleRunComponent> -->
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import logo from "./echarts/logo/LogoComponent.vue";
import bar from "./echarts/bar/BarComponent.vue";
import pie from "./echarts/pie/PieComponent.vue";
import radar from "./echarts/radar/RadarComponent.vue";
import circleRun from "./echarts/mixined/CircleRunComponent.vue";
export default {
  components: {
    logoComponent: logo,
    barComponent: bar,
    pieComponent: pie,
    radarComponent: radar,
    circleRunComponent: circleRun
  }
};
</script>