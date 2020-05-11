<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-row class="row-class">
        <van-row class="row-class">
          <van-contact-card
            add-text="本日工作内容"
            @click="showList = true"/>
        </van-row>
        <van-row
          class="row-class"
          v-for="count in 10"
          :key="count">
          <van-swipe-cell>
            <van-panel
              title="2020-02-21"
              icon="label"
              desc="D工厂-北一D工厂MES系统"
              status="未审批"
              @click="setShow(true)">
              <div style="padding:10px;">
                &nbsp;&nbsp;&nbsp;&nbsp;车间调度平台是否具备生产条件字段因无法统计状态，导致调度无法派工的问题，添加字段，通过执行存储过程反写状态
              </div>
            </van-panel>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="onDelete"/>
            </template>
          </van-swipe-cell>
        </van-row>
      </van-row>
    </van-pull-refresh>
    <van-popup
      v-model="showList"
      :style="{ width: '100%',height:'100%' }"
      position="bottom">
      <project-cost :show="showList" @setShow="setShow"></project-cost>
    </van-popup>
  </div>
</template>
<script>
  import ProjectCost from '@/model/cost/projectcost';

  export default {
    components: {
      ProjectCost
    },
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      onAdd() {
        this.editingContact = {id: this.list.length};
        this.isEdit = false;
        this.showEdit = true;
      },

      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      onSelect() {
        this.showList = false;
      },

      onSave(info) {
        this.showList = false;

        if (this.isEdit) {
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          this.list.push(info);
        }
        this.chosenContactId = info.id;
      },

      onDelete(info) {
        this.$toast.success('删除成功！');
      },

      setShow(event) {
        debugger;
        this.showList = event;
      }
    },
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },
      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      },
      showList: {
        get() {
          return this.$store.state.popupShow;
        },
        set(val) {
          this.$store.commit('SET_POPUP', val);
        }
      }
    }
  }
</script>
<style scoped>
  .row-class {
    margin-bottom: 10px;
  }

  .van-cell {
    border-radius: 10px;
  }

  .van-cell-group {
    border-radius: 10px;
  }

  .delete-button {
    height: 100%;
  }
</style>

