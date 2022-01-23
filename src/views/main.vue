<template>
<div class="total">
  <el-container>
    <el-header height="6vh">
      <head-top></head-top>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'5vw':'17vw'" style="overflow-x: hidden">
        <left-bar></left-bar>
      </el-aside>
      <el-container>
        <el-main><router-view/></el-main>
        <!--        <el-footer></el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</div>
</template>

<script>
import HeadTop from "@/components/headTop";
import LeftBar from "@/components/leftBar";

export default {
  name: "main",
  components: {LeftBar, HeadTop},
  computed:{
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/views/main/main.scss";
</style>