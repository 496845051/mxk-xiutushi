<template>
  <div id="app">
    <router-view></router-view>
    <canvas
      hidden
      id="canvas"
    ></canvas>
    <img
      src=""
      class="preview-img"
      id="preview-img"
    >
  </div>
</template>
<script>
export default {}
</script>
<style>
html {
  background: #eee;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.el-card-header-right-btn {
  float: right;
  position: relative;
  bottom: 5px;
}
.preview-img {
  position: absolute;
  top: 100px;
  left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
