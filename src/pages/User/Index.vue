<template>
  <div class="user">
    <div class="user-panel">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.user {
  height: 100%;
  width: 100%;
  background: url("../../../src/assets/imgs/login-bg.jpg");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-panel {
  width: 500px;
}
</style>
