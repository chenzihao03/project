<template>
  <van-collapse v-model="activeNames" accordion>
    <van-collapse-item title="北方运营中心" name="1">
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
    <van-collapse-item title="南方运营中心" name="2">
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
    <van-collapse-item title="制药事业部" name="3">
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
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      }
    },
    methods: {
      onSelect(option) {
        this.showShare = false;
      }
    }
  };
</script>
<style scoped>
  .custom-title {
    position: relative;
    top: -30%;
  }
</style>
