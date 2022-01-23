<template>
<div class="home">
  <h1>功能模块正在陆续开放...</h1>
  <div class="vanMenu">
    <van-grid :column-num="3" style="margin-top: 20px;">
      <van-grid-item
          v-for="item in vanMenu"
          icon="photo-o"
          :text="item"
      ></van-grid-item>
    </van-grid>
  </div>
</div>
</template>

<script>
import {Toast} from 'vant'

export default {
  name: "home",
  data(){
    return{
      vanMenu:[
          "聊天室","个人博客","文字","文字","文字","文字"
      ]

    }
  }

}
</script>

<style lang="scss" scoped>

@import "../../assets/css/views/home/home.scss";

</style>