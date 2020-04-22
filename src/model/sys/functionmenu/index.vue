<template>
  <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
    <template #content>
      <van-cell clickable>
        <span class="span-class">{{text}}</span>
      </van-cell>
    </template>
  </van-tree-select>
</template>
<script>
  export default {
    data() {
      return {
        isLoading: false,
        text: "示例141411141",
        active: 0,
        activeIndex: 0,
        items: [
          {text: "系统设置"},
          {text: '基础数据'}
        ]
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
<style scoped>
  .van-cell {
    padding-left: 0;
  }

  .van-swipe-cell {
    padding-bottom: 10px;
  }

  .span-class {
    padding-left: 10px;
    font-size: 18px;
  }

  .delete-button {
    height: 100%;
  }
</style>
