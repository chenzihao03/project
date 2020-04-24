<template>
  <van-row class="row-class">
    <navbar/>
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
<style scoped>
  .row-class:before {
    content: '';
    height: 40px;
    display: block;
  }

  .row-class {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
</style>
