<template>
  <van-row>
    <van-sticky>
      <navbar/>
    </van-sticky>
    <app-main/>
    <tabbar :menu="routes"/>
  </van-row>
</template>

<script>
  import {Navbar, AppMain, Tabbar} from './components'

  export default {
    name: 'Layout',
    components: {
      Navbar,
      AppMain,
      Tabbar
    },
    data() {
      return {
        sidebarShow: false
      }
    },
    computed: {
      routes() {
        return this.$router.options.routes
      }
    }
  }
</script>
<style>
</style>
