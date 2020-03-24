<template>
  <van-popup
    v-model="show"
    round
    position="left"
    :style="{ width: '70%',height: '100%' }"
    @close="setCollapse"
  >
    <table>
      <tr style="text-align:center;">
        <img
          slot="reference"
          src="@/assets/img/logo.jpg"
          style="height: 50px;width: 50px;border-radius: 25px;"/>
      </tr>
      <tr style="text-align:center;">
        <span class="span-class">陈梓豪</span>
      </tr>
    </table>
    <van-sidebar
      @change="setCollapse"
      style="width: 100%;"
      v-model="activeKey">
      <van-sidebar-item title="首页" dot to="/home"/>
      <van-sidebar-item title="步骤" dot to="/step"/>
      <van-sidebar-item title="项目" dot to="/project"/>
    </van-sidebar>
  </van-popup>
</template>

<script>
  export default {
    props: ["isShow"],
    data() {
      return {
        show: this.isShow,
        activeKey: 0
      }
    },
    watch: {
      isShow(val) {
        this.show = val;//新增result的watch，监听变更并同步到myResult上
      }
    },
    methods: {
      setCollapse() {
        this.show = false;
        this.$emit('setCollapse', this.show)
      }
    }
  }
</script>

<style scoped>
  .span-class {
    font-size: 15px;
    color: white;
  }

  table {
    width: 100%;
    padding: 60px 0 40px 0px;
    border-spacing: 0px 5px;
    background-color: #646566;
  }

  .van-sidebar {
    background-color: #e8e8e8 !important;
  }
</style>
