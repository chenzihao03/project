<template>
  <van-popup
    v-model="show"
    round
    position="left"
    :style="{ width: '70%',height: '100%' }"
    @close="setCollapse">
    <van-row>
      <van-col :span="14">
        <span class="name-span">陈梓豪</span>
        <span>北方事业部</span>
      </van-col>
      <van-col :span="4">
        <img
          src="@/assets/img/logo.jpg"
          style="height: 80px;width: 80px;border-radius: 50px;"
        />
      </van-col>
    </van-row>
    <el-menu
      class="el-menu-vertical-demo"
      @select="setCollapse"
      router>
      <sidebar-item :menu="routes"></sidebar-item>
    </el-menu>
  </van-popup>
</template>

<script>
  import SidebarItem from './SidebarItem'

  export default {
    components: {
      SidebarItem
    },
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
    },
    computed: {
      routes() {
        return this.$router.options.routes
      }
    }
  }
</script>

<style scoped>
  * {
    background-color: #f2f3f5 !important;
  }

  .van-col {
    padding: 30px 0 30px 15px;
  }

  .name-span {
    display: block;
    font-size: 1.3em;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
</style>
