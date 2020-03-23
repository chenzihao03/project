<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-row class="row-class">
        <van-row class="row-class">
          <van-contact-card
            add-text="本日工作内容"
            @click="showList = true"
          />
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
              @click="showList = true">
              <div style="padding:10px;">
                车间调度平台是否具备生产条件字段因无法统计状态，导致调度无法派工的问题，添加字段，通过执行存储过程反写状态
              </div>
            </van-panel>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"/>
            </template>
          </van-swipe-cell>
        </van-row>
      </van-row>
    </van-pull-refresh>
    <!-- 联系人列表 -->
    <van-popup v-model="showList" round position="bottom">
      <project-cost></project-cost>
    </van-popup>
  </div>
</template>
<script>
  import ProjectCost from '../projectcost';

  export default {
    components: {
      ProjectCost
    },
    data() {
      return {
        showList: false,
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      // 添加联系人
      onAdd() {
        this.editingContact = {id: this.list.length};
        this.isEdit = false;
        this.showEdit = true;
      },

      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      // 保存联系人
      onSave(info) {
        this.showEdit = false;
        this.showList = false;

        if (this.isEdit) {
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          this.list.push(info);
        }
        this.chosenContactId = info.id;
      },

      // 删除联系人
      onDelete(info) {
        this.showEdit = false;
        this.list = this.list.filter(item => item.id !== info.id);
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
      }
    },
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },
      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
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

