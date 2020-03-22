<template>
  <van-tabbar
    route
    class="tab-bar"
    safe-area-inset-bottom>
    <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="comment" to="/step">步骤</van-tabbar-item>
    <van-tabbar-item icon="friends" to="/project">项目</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped>
  * {
    font-size: 15px;
  }

  .tab-bar {
    background-color: #ebedf0;
    position: fixed;
  }
</style>
