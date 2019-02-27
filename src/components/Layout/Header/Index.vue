<template>
  <div class="header">
    <!-- <img src="../../../assets/imgs/logo.png" alt="" /> -->
    <span>名鞋库修图模块</span>
    <el-menu
      class="header-menu"
      background-color="#1f6fb5"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="true"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="user">
        <template slot="title">
          {{ GET_USER.userName }}
        </template>
        <el-menu-item index="exitLogin">退出登陆</el-menu-item>
        <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import http from '../../../utils/http.js'
export default {
  methods: {
    ...mapMutations(['CLEAR_USER']),
    handleSelect (e) {
      if (e === 'exitLogin') {
        this.handleExitLogin()
      }
    },
    handleExitLogin () {
      http.setToken('')
      this.CLEAR_USER()
      this.$router.push('/user/login')
    }
  },
  computed: {
    ...mapGetters(['GET_USER'])
  }
}
</script>

<style scoped>
.header {
  height: 100%;
  width: 100%;
  background: #1f6fb5;
  line-height: 60px;
  color: white;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgb(58, 58, 58);
  z-index: 1000;
  position: relative;
}
.header img {
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-right: 10px;
}
.header span {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 4px;
}
.header .header-menu {
  margin-right: 30px;
}
</style>
