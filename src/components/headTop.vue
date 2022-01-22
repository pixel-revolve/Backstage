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
      <div class="head_right_content">
        <el-menu-item v-for="item in routers" :index="item.server">{{item.value}}</el-menu-item>
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
        {value: '一',server: '1'},{value: '二',server: '2'},{value: '三',server: '3'},{value: '四',server: '4'}
      ],
      avatar: require("../assets/image/user/avatar.jpg")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    async handleCommand(command) {
      if (command === 'home') {
        await this.$router.push('/');
      }else if(command === 'signout'){
        console.log('退出');
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
