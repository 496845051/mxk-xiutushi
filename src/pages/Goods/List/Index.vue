<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" v-for="(item, index) in task.goods" :key="index">
        <goods-item :item="item" :index="index"></goods-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: {}
    }
  },
  created () {
    let task = JSON.parse(this.$route.query.task)
    task.taskGoodsOrders.forEach((item, index) => {
      this.$API
        .getTaskGoods([
          {
            goodsId: item.goodsId,
            orderId: item.orderId
          }
        ])
        .then(res => {
          task.goods[index].images = res.data.images[0].images
        })
    })
    this.task = task
  },
  components: {
    goodsItem: () => import('../../../components/GoodsItem/Index.vue')
  }
}
</script>

<style scoped></style>
