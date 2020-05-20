<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="background: #f7f8fa;">
      <van-cell is-link center @click="setShow">
        <van-row>
          <van-col :span="7">
            <img
              src="@/assets/img/logo.jpg"
              style="height: 80px;width: 80px;border-radius: 50px;"/>
          </van-col>
          <van-col :span="16">
            <span class="name-span">陈梓豪</span>
            <span>北方事业部</span>
          </van-col>
        </van-row>
      </van-cell>
      <van-cell class="grid-class">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="value in 18" :key="value" icon="photo-o" text="文字"/>
        </van-grid>
      </van-cell>
    </van-pull-refresh>
    <van-popup
      v-model="myShow"
      :style="{ width: '100%',height:'100%' }"
      position="right"
      safe-area-inset-bottom
      class="popup-class">
      <van-nav-bar
        left-arrow
        @click-left="setShow">
        <template #left>
          <van-icon name="arrow-left" size="20"/>
        </template>
      </van-nav-bar>
      <van-button block type="info" @click="onExit" class="bottom-class">退出登录</van-button>
    </van-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentRate: 0,
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      setShow() {
        this.myShow = !this.myShow;
      },
      onExit() {
        this.$dialog.confirm({
          message: '确定退出登录',
        }).then(() => {
          this.myShow = false;
          window.localStorage.clear();
          this.$router.push('/login');
        }).catch(() => {
          // on cancel
        });
      }
    },
    computed: {
      myShow: {
        get() {
          return this.$store.state.myShow;
        },
        set(val) {
          this.$store.commit('SET_MY_POPUP', val);
        }
      }
    }
  };
</script>
<style scoped>
  .name-span {
    display: block;
    font-size: 1.3em;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .grid-class {
    margin-top: 10px;
    border-radius: 30px;
  }

  .popup-class:before {
    content: '';
    height: 40px;
    display: block;
  }

  .bottom-class {
    position: fixed;
    bottom: 20px;
  }
</style>
