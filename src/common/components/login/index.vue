<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 p-t-190 p-b-30">
        <form class="login100-form validate-form">
          <div class="login100-form-avatar">
            <img src="@/assets/img/logo.jpg" alt="AVATAR">
          </div>

          <span class="login100-form-title p-t-20 p-b-45">Hello</span>

          <div class="wrap-input100 validate-input m-b-10" data-validate="请输入用户名">
            <input class="input100" type="text" v-model="username" placeholder="用户名" autocomplete="off">
            <span class="symbol-input100"><i class="fa fa-user"></i></span>
          </div>

          <div class="wrap-input100 validate-input m-b-10">
            <input class="input100" type="password" v-model="password" placeholder="密码">
            <span class="symbol-input100"><i class="fa fa-lock"></i></span>
          </div>

          <button class="login100-form-btn" type="button" @click="checkLogin">登 录</button>

          <div class="text-center w-full p-t-25 50">
            <a href="#" class="txt1">忘记密码？</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      checkLogin() {
        this.$router.push('home');
      }
    }
  }
</script>

<style scoped>
  @import "resources/css/main.css";
  @import "resources/css/util.css";
</style>
