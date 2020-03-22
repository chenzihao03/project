<template>
  <van-collapse v-model="activeName" accordion>
    <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
    <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
  </van-collapse>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      }
    }
  }
</script>
<style scoped>
  .van-collapse {
    background-color: #f2f3f5 !important;
  }

  .van-collapse-item {
    background-color: #f2f3f5 !important;
  }
</style>

