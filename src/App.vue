<template>
  <div id="app">
    <transition name="van-fade" mode="out-in" v-if="isShow">
      <router-view/>
    </transition>
    <transition name="van-slide-left" v-else>
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        route: this.$route.path
      }
    },
    methods: {},
    computed: {
      isShow() {
        if (this.$route.path !== "/home") {
          return true;
        } else {
          return false;
        }
      }
    }
  }
</script>
<style scoped>
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
