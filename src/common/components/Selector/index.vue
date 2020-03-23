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
    <van-field
      clickable
      :label="label"
      :value="value"
      v-if="type==='text'"
      :placeholder="placeholder"/>
    <van-field
      readonly
      clickable
      :label="label"
      :value="value"
      :error-message="errorInfo"
      v-if="type==='number'"
      @touchstart.native.stop="keyboardShow = true"
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
      clickable
      v-if="type==='message'"
      v-model="value"
      rows="10"
      autosize
      :label="label"
      type="textarea"
      :placeholder="placeholder"
      show-word-limit
    />
    <van-number-keyboard
      :show="keyboardShow"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="keyboardShow = false"
      @input="onInput"
      @delete="onDelete"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
      :style="{ width: '100%' }"
      v-if="type==='select'">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
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
        errorInfo: '',
        keyboardShow: false,
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
        this.value = `${date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}`;
        this.showCalendar = false;
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
        if (this.value > 24) {
          this.errorInfo = '工作时间不能大于24小时';
        } else {
          this.errorInfo = '';
        }
      },
      onInput(key) {
        this.value = (this.value + key).slice(0, 2);
        if (this.value > 24) {
          this.errorInfo = '工作时间不能大于24小时';
        } else {
          this.errorInfo = '';
        }
      }
    }
  }
</script>

