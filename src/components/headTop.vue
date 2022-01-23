<template>
  <div class="header_container">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#292961"
        text-color="#fff"
        active-text-color="#66b1ff"
    >
      <div class="head_left_logo">
        <img :src="logo" class="logo">
      </div>
      <div class="head_right_content">
        <el-menu-item v-for="item in routers" :index="item.server">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.value }}</span>
        </el-menu-item>
      </div>
      <div class="head_right_avatar">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <img :src="avatar" class="avatar"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="signout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>

</template>

<script>
export default {
  name: "headTop",
  data() {
    return {
      activeIndex: '1',
      routers: [
        {value: '请求',server: '1',icon:'ice-drink'},
        {value: '日程',server: '2',icon:'date'},
        {value: '待办',server: '3',icon:'s-claim'},
        {value: '事项',server: '4',icon:'question'}
      ],
      avatar: require("../assets/image/user/avatar.jpg"),
      logo: require("../assets/image/logo.png")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    async handleCommand(command) {
      if (command === 'home') {
        await this.$router.push('/home');
      }else if(command === 'signout'){
        console.log('退出');
        await this.$router.push('/login');
        // const res = await signout()
        // if (res.status === 1) {
        //   this.$message({
        //     type: 'success',
        //     message: '退出成功'
        //   });
        //   await this.$router.push('/');
        // }else{
        //   this.$message({
        //     type: 'error',
        //     message: res.message
        //   });
        // }
      }
    },
  }
}
</script>

<style scoped lang="scss">


@import "../assets/css/components/headTop.scss";
</style>
