<template>
  <van-col span="24" class="col-class">
    <transition name="van-fade" mode="out-in">
      <router-view
        :key="key"
        style="height: 100%;overflow: auto !important;"/>
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
  .col-class {
    height: 85%;
  }

  .col-class:after {
    content: '';
    height: 40px;
    display: block;
  }
</style>
