<template>
  <van-cell-group>
    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      :label="label"
      v-if="type==='select'"
      :placeholder="placeholder"
      @click="showPicker = true"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
      v-if="type==='select'">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-field
      :label="label"
      :value="value"
      v-if="type==='text'"
      :placeholder="placeholder"/>
    <van-field
      readonly
      clickable
      name="calendar"
      :value="value"
      :label="label"
      v-if="type==='date'"
      :placeholder="placeholder"
      @click="showCalendar = true"
    />
    <van-calendar
      v-if="type==='date'"
      v-model="showCalendar"
      @confirm="onConfirmDate"/>
    <van-field
      v-if="type==='message'"
      v-model="value"
      rows="10"
      autosize
      :label="label"
      type="textarea"
      :placeholder="placeholder"
      show-word-limit
    />
  </van-cell-group>
</template>
<script>
  export default {
    name: "Selector",
    props: {
      label: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      placeholder: {
        type: String,
        default: ""
      },
      columns: {
        type: Array
      }
    },
    data() {
      return {
        value: '',
        showPicker: false,
        showCalendar: false
      }
    },
    methods: {
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      onConfirmDate(date) {
        debugger;
        this.value = `${date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}`;
        this.showCalendar = false;
      }
    }
  }
</script>

