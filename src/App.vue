<template>
  <div id="app">
    <transition name="van-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style>
  body {
    font-family: "FontAwesome";
    margin: 0;
    padding: 0;
    border: none;
  }

  ::-webkit-scrollbar {
    width: 0 !important;
  }

  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }
</style>
