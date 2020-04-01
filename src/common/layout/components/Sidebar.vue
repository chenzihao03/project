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
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
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
  * {
    background-color: #f2f3f5;
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
