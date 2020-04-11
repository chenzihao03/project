<template>
  <van-uploader :after-read="afterRead"/>
</template>
<script>
  export default {
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      }
    }
  };
</script>
<style scoped>
</style>
