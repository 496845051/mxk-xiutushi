<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <div slot="header" class="task-header">
        <span>任务ID：{{ item.id }}</span>

        <div style="float:right" v-show="item.assignTime">
          分配时间：{{ item.assignTime }}
        </div>
      </div>
      <div class="card-body">
        <div class="img-list">
          <div v-for="(goods, goodsIndex) in item.goods" :key="goodsIndex">
            <el-popover
              placement="right-end"
              :title="'货物号：' + goods.goodsNo"
              width="400"
              trigger="hover"
            >
              <div>订单号：{{ goods.orders.orderNo }}</div>
              <div><img :src="goods.images.source" style="width:100%" /></div>
              <div class="img-item" slot="reference">
                <img :src="goods.images.source" class="img-avatar" />
                <div>{{ goods.goodsNo }}</div>
              </div>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="status" :style="{ color: selectedStatus.color }">
          <i :class="selectedStatus.icon"></i>
          <span>{{ item.taskState.displayName }}</span>
        </div>
        <div class="btn-group">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit-outline"
            @click="handleClick"
            >去完成</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      statusList: [
        {
          id: 1,
          color: '#F56C6C',
          icon: 'el-icon-error'
        },
        {
          id: 2,
          color: '#E6A23C',
          icon: 'el-icon-warning'
        },
        {
          id: 3,
          color: '#409EFF',
          icon: 'el-icon-success'
        },
        {
          id: 4,
          color: '#909399',
          icon: 'el-icon-question'
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$router.push({
        path: 'goods',
        query: {
          task: JSON.stringify(this.item)
        }
      })
    }
  },
  computed: {
    selectedStatus () {
      return this.statusList.find(
        status => status.id === this.item.taskState.id
      )
    }
  },
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  }
}
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
}
.task-header {
  justify-content: space-between;
}
.right-btn {
  float: right;
  position: relative;
  bottom: 10px;
}
.card-body {
  padding: 20px;
  overflow: hidden;
}
.card-footer {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}

.card-footer {
  border-top: 1px solid #ebeef5;
}
.status,
.btn-group {
  display: inline-block;
}
i {
  margin-right: 5px;
}
.img-list {
  overflow-y: auto;
  height: 118.9px;
}
.img-list::-webkit-scrollbar {
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.img-list::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ccc;
}
.img-list::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
.img-item {
  float: left;
  text-align: center;
  font-size: 12px;
  color: gray;
}
.img-avatar {
  width: 100px;
  height: 100px;
}
</style>
