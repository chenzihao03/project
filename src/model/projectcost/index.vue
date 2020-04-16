<template>
  <div>
    <br><br>
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
    <van-button type="primary" block @click="onSubmit">提交</van-button>
  </div>
</template>
<script>
  import Selector from '@/common/components/Selector'

  export default {
    components: {
      Selector
    },
    data() {
      return {
        activeName: '1',
        show: false,
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
          name: "费用说明",
          type: "message",
          placeholder: "填写工作时间内容"
        }]
      }
    },
    methods: {
      onSubmit() {
        debugger;
      }
    }
  }
</script>
<style scoped>
  .group-class {
    border-radius: 10px;
  }
</style>

