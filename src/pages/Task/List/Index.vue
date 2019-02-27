<template>
  <div>
    <div></div>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item, index) in task" :key="index">
        <task-item :item="item" :index="index"></task-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      task: [],
      total: 0,
      keyword: ''
    }
  },
  created () {
    this.$API
      .getTask({
        id: this.GET_USER.id,
        keyword: this.keyword
      })
      .then(res => {
        this.task = res.data.tasks
        this.total = res.data.count
      })
  },

  computed: {
    ...mapGetters(['GET_USER'])
  },
  components: {
    taskItem: () => import('../../../components/TaskItem/Index')
  }
}
</script>

<style scoped></style>
