<template>
  <div class="div-class">
    <van-nav-bar
      title="项目成本维护"
      @click-right="onSubmit">
      <template #right>
        <van-icon name="passed" size="40"/>
      </template>
    </van-nav-bar>
    <van-cell-group class="group-class">
      <template v-for="(item,index) in label">
        <Selector
          :key="index"
          :type="item.type"
          :label="item.name"
          :columns="item.columns"
          :placeholder="item.placeholder"
        ></Selector>
      </template>
    </van-cell-group>
    <van-icon name="cross" @click="onClose" class="bottom-class"/>
  </div>
</template>
<script>
  import Selector from '@/common/components/Selector';

  export default {
    components: {
      Selector
    },
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        activeName: '1',
        label: [{
          name: "项目选择",
          type: "select",
          placeholder: "点击选择项目",
          columns: ['D工厂-北一D工厂MES系统', '北一大隈-机床企业数字化车间管理系统', '神软-202.31车间MES', '神软-天津609厂计量', '神软-中电58所试验管理系统']
        }, {
          name: "成本项",
          type: "select",
          placeholder: "点击选择费用",
          columns: ['开发费', '实施费', '管理费', '请假', '其他费用']
        }, {
          name: "工作时间",
          type: "number",
          placeholder: "填写工作时间（小时）"
        }, {
          name: "工作日期",
          type: "date",
          placeholder: "点击选择日期"
        }, {
          name: "工作地点",
          type: "select",
          placeholder: "点击选择工作地点",
          columns: ['公司', '项目单位', '其他']
        }, {
          name: "附件上传",
          type: "uploader"
        }, {
          name: "费用说明",
          type: "message",
          placeholder: "填写工作时间内容"
        }]
      }
    },
    methods: {
      onSubmit(event) {
        this.$store.commit('SET_POPUP', false);
      },
      onClose() {
        this.$store.commit('SET_POPUP', false);
      }
    }
  }
</script>
<style scoped>
  .group-class {
    border-radius: 10px;
  }

  .bottom-class {
    position: fixed;
    bottom: 20px;
    font-size: 30px;
    right: 46%;
  }

  .div-class:before {
    content: '';
    height: 40px;
    display: block;
  }
</style>

