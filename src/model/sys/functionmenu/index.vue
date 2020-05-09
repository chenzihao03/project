<template>
  <el-container>
    <el-menu
      @select="handleOpen"
      :collapse="isCollapse"
      :is-collapse="isCollapse"
      unique-opened
      style="height: 100%;"
      :class="sidebar">
      <sidebar-item :menu="routes"></sidebar-item>
    </el-menu>
    <el-main style="width: auto;">
      1234141
      <div class="button-class" @click="isCollapse = !isCollapse">
        <van-icon name="bars"/>
      </div>
    </el-main>
  </el-container>
</template>
<script>
  import SidebarItem from '@/common/layout/components/SidebarItem'

  export default {
    components: {
      SidebarItem
    },
    data() {
      return {
        isCollapse: false,
        sidebar: "sidebar-class"
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        debugger;
      }
    },
    computed: {
      routes() {
        return this.$store.state.functionMenu
      }
    },
    watch: {
      isCollapse(val) {
        if (!val) {
          this.sidebar = "sidebar-class";
        } else {
          this.sidebar = "";
        }
      }
    }
  };
</script>
<style scoped>
  .el-tree {
    font-size: 20px;
  }

  .button-class {
    position: fixed;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    cursor: pointer;
    z-index: 5;
    right: 20px;
    bottom: 60px;
  }

  .button-class:hover {
    background-color: #f2f6fc;
  }

  .sidebar-class {
    min-width: 150px;
  }
</style>
