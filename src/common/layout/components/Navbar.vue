<template>
  <van-row>
    <van-sticky>
      <van-row>&nbsp;</van-row>
      <van-row>&nbsp;</van-row>
      <van-row>
        <van-nav-bar left-arrow>
          <template #left>
            <van-icon name="bars" size="30" @click="isShow = true"/>
          </template>
          <template #right>
            <van-icon name="plus" size="30" @click="tShow"/>
          </template>
        </van-nav-bar>
      </van-row>
    </van-sticky>
    <van-row>
      <van-search
        v-model="value"
        shape="round"
        background="#f2f3f5"
        placeholder="请输入搜索关键词"
      />
    </van-row>
    <sidebar
      :isShow="isShow"
      @setCollapse="setCollapse"/>
  </van-row>
</template>

<script>
  import Sidebar from './Sidebar'

  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        value: null,
        isShow: false
      }
    },
    methods: {
      onSearch(val) {
        alert(val);
      },
      setCollapse(event) {
        this.isShow = event;
      },
      tShow() {
        alert(123);
      }
    }
  }
</script>
<style scoped>
  * {
    background-color: #f2f3f5 !important;
  }

  .van-icon {
    font-weight: bold;
    color: #646566;
  }

  .van-field__control {
    background-color: white !important;
    border-radius: 0 10px 10px 0;
  }
</style>
