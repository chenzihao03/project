<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-col span="22" offset="1">
      <van-swipe-cell v-for="count in 10" :key="count">
        <van-cell clickable>
          <van-row type="flex" align="center">
            <el-avatar shape="square">{{text}}</el-avatar>
            <span class="span-class">{{text}}</span>
          </van-row>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" class="delete-button"/>
        </template>
      </van-swipe-cell>
    </van-col>
  </van-pull-refresh>
</template>
<script>
  export default {
    data() {
      return {
        isLoading: false,
        text: "示例141411141"
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
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
