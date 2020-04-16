<template>
  <van-skeleton title :row="4"/>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
    mounted() {
      this.loading = true;
    }
  }
</script>
<style scoped>
  .charts-comps {
    width: 100%;
  }
</style>
