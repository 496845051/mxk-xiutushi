<template>
  <el-container class="container">
    <el-header class="header"> <Header></Header> </el-header>
    <el-main> <router-view></router-view> </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Layout/Header/Index.vue')
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}
.header {
  padding: 0px;
}
</style>
