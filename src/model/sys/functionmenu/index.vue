<template>
  <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
    <template #content>
      <van-image
        v-if="active === 0"
        src="https://img.yzcdn.cn/vant/apple-1.jpg"
      />
      <van-image
        v-if="active === 1"
        src="https://img.yzcdn.cn/vant/apple-2.jpg"
      />
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
          {text: '浙江', children: [], dot: true},
          {text: '江苏', children: [], badge: 5},
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
