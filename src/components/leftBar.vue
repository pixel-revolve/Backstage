<template>
<div class="leftBar">
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
          :collapse="isCollapse"
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#f0f0f0"
          text-color="#000"
          active-text-color="#66b1ff"
      >
          <el-menu-item
              :index="item.path"
              v-for="item in menu"
              :key="item.path"
              @click="clickMenu(item)"
          >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.value }}</span>
          </el-menu-item>

        <div class="close-nav-button">
          <el-divider></el-divider>
          <el-menu-item
              @click="handleMenu"
          >
            <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i>
            <span slot="title">收起侧边栏</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </el-row>

</div>
</template>

<script>
export default {
  name: "leftBar",

  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          value: "首页",
          icon: "s-home",
        },
        {
          path: "/back/user",
          name: "user",
          value: "用户管理",
          icon: "user",
        },
        {
          path: "/test",
          name: "test",
          value: "测试",
          icon: "thumb",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({name: item.name});
    },
    handleMenu() {
      console.log(this.$store.state.tab.isCollapse)
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
}
</script>

<style scoped lang="scss">

@import "../assets/css/components/leftBar.scss";

</style>
