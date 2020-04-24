<template>
  <van-row class="navbar">
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
  .van-icon {
    font-weight: bold;
    color: #646566 !important;
  }

  .van-field__control {
    background-color: white !important;
    border-radius: 0 10px 10px 0;
  }
</style>
