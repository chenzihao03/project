<template>
  <van-tabbar
    route
    class="tab-bar"
    v-model="active">
    <van-tabbar-item icon="wap-home" to="/projectCost/projectCost">首页</van-tabbar-item>
    <van-tabbar-item icon="comment" to="/basic/department">部门</van-tabbar-item>
    <van-tabbar-item @click="setShow(true)">
      <img src="@/assets/img/logo.jpg" class="center-class"/>
    </van-tabbar-item>
    <van-tabbar-item icon="comment" to="/basic/user">用户</van-tabbar-item>
    <van-tabbar-item icon="friends" to="/basic/project">项目</van-tabbar-item>
    <van-popup
      v-model="showList"
      :style="{ width: '100%',height:'100%' }"
      position="bottom"
      :overlay="false">
      <project-cost :show="showList" @setShow="setShow"></project-cost>
    </van-popup>
  </van-tabbar>
</template>

<script>
  import ProjectCost from '@/model/cost/projectcost';

  export default {
    components: {
      ProjectCost
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      setShow(event) {
        this.showList = event;
      }
    },
    computed: {
      showList: {
        get() {
          return this.$store.state.popupShow;
        },
        set(val) {
          this.$store.commit('SET_POPUP', val);
        }
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
