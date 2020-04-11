<template>
  <van-row>
    <van-row>&nbsp;</van-row>
    <van-row>&nbsp;</van-row>
    <van-row>&nbsp;</van-row>
    <van-row>
      <van-col span="2" offset="1">
        <van-icon name="bars" @click="isShow = true"/>
      </van-col>
      <van-col span="21">
        <van-search
          v-model="value"
          shape="round"
          background="#f2f3f5"
          placeholder="请输入搜索关键词"
        />
      </van-col>
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
    font-size: 30px;
    color: #646566;
  }

  .van-search {
    margin-top: -10px;
  }
</style>
