<template>
  <van-col span="24" class="col-class">
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
  }

  .col-class:after {
    content: '';
    height: 40px;
    display: block;
  }
</style>
