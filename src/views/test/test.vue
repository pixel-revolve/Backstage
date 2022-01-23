<template>
  <div class="test">
   <h1>Hello</h1>
    <van-grid :column-num="3">
      <van-grid-item text="聊天室" to="/Chat" />
      <van-grid-item text="文字" />
      <van-grid-item text="文字" />
      <van-grid-item text="文字" />
      <van-grid-item text="文字" />
      <van-grid-item text="文字" />
    </van-grid>

  </div>
</template>

<script>
export default {
  name: "test"
}
</script>

<style scoped>

</style>