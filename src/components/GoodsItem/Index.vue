<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <div slot="header" class="task-header">
        <div>货物号：{{ item.goodsNo }}</div>
        <div class="desc-title">订单号：{{ item.orders.orderNo }}</div>
      </div>
      <div class="card-body">
        <div class="img-list">
          <div v-for="(img, imgIndex) in item.images" :key="imgIndex">
            <el-popover
              placement="right-end"
              :title="'图片名：' + img.imageNo"
              width="300"
              trigger="hover"
            >
              <div><img :src="img.source" style="width:100%" /></div>
              <div class="img-item" slot="reference">
                <img :src="img.source" class="img-avatar" />
                <div>{{ img.imageNo }}</div>
              </div>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-edit-outline"
          @click="handleClick"
          >去完成</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    handleClick () {
      this.$router.push({
        path: 'edit',
        query: {
          goods: JSON.stringify(this.item)
        }
      })
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          images: []
        }
      }
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
  border-top: 1px solid #ebeef5;
  flex-direction: row-reverse;
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
.desc-title {
  font-size: 12px;
  color: gray;
}
</style>
