<template>
  <van-tabbar
    route
    class="tab-bar"
    v-model="active">
    <van-tabbar-item icon="wap-home" to="/projectCost/projectCost">首页</van-tabbar-item>
    <van-tabbar-item icon="comment" to="/step">步骤</van-tabbar-item>
    <van-tabbar-item icon="friends" to="/basic/project">项目</van-tabbar-item>
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
    position: fixed;
  }

  i {
    font-size: 50px;
    padding-top: -10px;
  }
</style>
