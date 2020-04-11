<template>
  <van-col span="22" offset="1" class="col-class">
    <transition name="van-fade" mode="out-in">
      <router-view
        :key="key"/>
    </transition>
  </van-col>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>
<style>
  body {
    width: 100%;
    height: 100%;
    background-color: #f2f3f5;
  }

  .col-class:after {
    content: '';
    height: 50px;
    display: block;
    background-color: #f2f3f5;
  }
</style>
