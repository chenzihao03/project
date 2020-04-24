<template>
  <van-tabbar
    route
    class="tab-bar"
    v-model="active">
    <van-tabbar-item icon="wap-home" to="/projectCost/projectCost">首页</van-tabbar-item>
    <van-tabbar-item icon="comment" to="/basic/department">部门</van-tabbar-item>
    <van-tabbar-item to="/myprojectcost">
      <img src="@/assets/img/logo.jpg" class="center-class"/>
    </van-tabbar-item>
    <van-tabbar-item icon="comment" to="/basic/user">用户</van-tabbar-item>
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
    z-index: 5 !important;
  }

  .tab-bar {
    position: fixed;
  }

  i {
    font-size: 50px;
    padding-top: -10px;
  }

  .center-class {
    margin-top: -20px;
    height: 60px;
    width: 60px;
    border-radius: 50px;
  }
</style>
