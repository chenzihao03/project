<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-row v-for="items in text" :key="items.name">
      <van-cell clickable @click="tAdd">
        <van-row type="flex" align="center">
          <el-avatar shape="circle" icon="fa fa-sitemap"></el-avatar>
          <span class="span-class">{{items.name}}</span>
        </van-row>
        <template #right-icon>
          <i class="fa fa-plus" aria-hidden="true"
             style="line-height: inherit;font-size: 20px !important;padding-top: 10px;"></i>
        </template>
      </van-cell>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="北方运营中心" name="1" size="large">
          <van-swipe-cell v-for="count in 10" :key="count">
            <van-cell clickable center size="large">
              <template #title>
                <van-row type="flex" align="center">
                  <van-col :span="4">
                    <el-avatar>梓豪</el-avatar>
                  </van-col>
                  <van-col :span="20">
                    <span>陈梓豪</span>
                    <van-tag plain round>主管</van-tag>
                  </van-col>
                </van-row>
              </template>
            </van-cell>
            <template #right>
              <van-button square type="danger" text="删除" class="delete-button"/>
            </template>
          </van-swipe-cell>
        </van-collapse-item>
        <van-collapse-item title="南方运营中心" name="2" size="large">
          <van-cell v-for="count in 10" :key="count" clickable center size="large">
            <template #title>
              <van-row type="flex" align="center">
                <van-col :span="4">
                  <el-avatar>梓豪</el-avatar>
                </van-col>
                <van-col :span="20">
                  <span>陈梓豪</span>
                  <van-tag plain round>主管</van-tag>
                </van-col>
              </van-row>
            </template>
          </van-cell>
        </van-collapse-item>
        <van-collapse-item title="制药事业部" name="3" size="large">
          <van-cell v-for="count in 10" :key="count" clickable center size="large">
            <template #title>
              <van-row type="flex" align="center">
                <van-col :span="4">
                  <el-avatar>梓豪</el-avatar>
                </van-col>
                <van-col :span="20">
                  <span>陈梓豪</span>
                  <van-tag plain round>主管</van-tag>
                </van-col>
              </van-row>
            </template>
          </van-cell>
        </van-collapse-item>
      </van-collapse>
    </van-row>
  </van-pull-refresh>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        isLoading: false,
        text: [{name: "嘉禾云网"}, {name: "北京并捷"}]
      }
    },
    methods: {
      onSelect(option) {
        this.showShare = false;
      },
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      tAdd() {
        this.$toast.success('增加成功');
      }
    }
  };
</script>
<style scoped>
  .custom-title {
    position: relative;
    top: -30%;
  }

  .card-class:after {
    content: '';
    height: 40px;
    display: block;
  }

  .span-class {
    padding-left: 10px;
    font-size: 18px;
  }

  .delete-button {
    height: 100%;
  }
</style>
