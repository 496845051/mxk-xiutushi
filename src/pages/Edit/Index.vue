<template>
  <div class="panel">
    <div class="images">
      <div
        class="image"
        v-for="(item, index) in mains"
        :key="item.id"
      >
        <img
          :src="item.source"
          :class="{'image-item':true,'hidden':item.isCrop}"
          @dblclick="handleBeginCrop(index)"
          @load="handleImgLoaded($event)"
        >
        <div
          class="crop-btn"
          v-show="item.isCrop"
          :style="item.cropBtnStyle"
        >
          <el-button
            icon="el-icon-check"
            size="mini"
            circle
            type="primary"
            @click="handleSubmitCrop(index)"
          ></el-button>
          <el-button
            icon="el-icon-close"
            size="mini"
            circle
            type="danger"
            @click="handleCancelCrop(index)"
          ></el-button>
        </div>
        <vue-cropper
          v-if="item.isCrop"
          :ref="'cropper'+index"
          :img="item.source"
          class="image-crop"
          :mode="options.mode"
          :autoCrop="options.autoCrop"
          :autoCropWidth="options.autoCropWidth"
          :autoCropHeight="options.autoCropHeight"
          :fixed="options.fixed"
          :centerBox="options.centerBox"
          :canScale="options.canScale"
          :canMove="options.canMove"
          @imgLoad="handleCropLoaded(index)"
          @cropMoving="handleCropLoaded(index)"
          @cropSize="handleCropLoaded(index)"
        ></vue-cropper>

      </div>
    </div>
    <div class="btn-group">
      <div>
        <i
          class="el-icon-refresh"
          @click="handleExchagne"
        ></i>
      </div>
      <div>
        <i class="el-icon-refresh"></i>
      </div>
    </div>

    <el-dialog
      title="交换主图顺序"
      :visible.sync="exchangeVisible"
      width="20%"
    >
      <exchange-order v-model="mains"></exchange-order>
    </el-dialog>
  </div>
</template>

<script>
import cv from '../../utils/canvas.js'
import { VueCropper } from 'vue-cropper'
export default {
  data () {
    return {
      goods: undefined,
      mains: [],
      lights: [],
      exchangeVisible: false,
      options: {
        mode: 'cover',
        autoCrop: true,
        canMove: false,
        autoCropWidth: '100px',
        autoCropHeight: '100px',
        centerBox: true,
        fixed: true,
        canScale: false
      }
    }
  },
  created () {
    let goods = JSON.parse(this.$route.query.goods)
    this.mains = goods.images.filter(item => item.isMain).map(item => {
      item.isCrop = false
      return item
    })
    this.lights = goods.images.filter(item => !item.isMain)
    this.goods = goods
  },
  mounted () {

  },
  methods: {
    handleExchagne () {
      this.exchangeVisible = true
    },
    handleBeginCrop (index) {
      this.mains[index].isCrop = true
    },
    handleImgLoaded ($event) {
    },
    handleCropLoaded (index) {
      console.log(this.$refs['cropper' + index][0].getCropAxis())
      let axis = this.$refs['cropper' + index][0].getCropAxis()
      let mains = [...this.mains]
      mains[index].cropBtnStyle = `position:absolute;left:${axis.x2}px;top:${axis.y2}px`
      this.mains = mains
    },
    handleSubmitCrop (index) {
      let cropData = this.$refs['cropper' + index][0].getCropAxis()
      cv.getCropImage(this.mains[index].source, cropData.x1, cropData.y1, cropData.x2 - cropData.x1, cropData.y2 - cropData.y1)
    },
    handleCancelCrop (index) {
      this.$refs['cropper' + index][0].clearCrop()
      this.mains[index].isCrop = false
    }
  },
  components: {
    'exchange-order': () => import('../../components/MainExchange/Index.vue'),
    VueCropper
  }
}
</script>

<style scoped>
.panel {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.btn-group {
  float: left;
  margin-left: 10px;
}
.btn-group div {
  line-height: 40px;
  width: 40px;
  font-size: 20px;
  color: gray;
  text-align: center;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px #aaa;
  cursor: pointer;
  transition: all 0.5s;
  margin-bottom: 10px;
}
.btn-group div:hover {
  box-shadow: 0 2px 4px #ddd;
}
.images {
  margin-left: 10%;
  width: 80%;
  padding: 15px;
  background: white;
  border-radius: 10px;
  float: left;
  box-sizing: border-box;
}
.image {
  position: relative;
}
.image-item {
  width: 100%;
}
.hidden {
  opacity: 0;
}
.image-crop {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
.crop-btn {
  padding: 10px;
  z-index: 1000;
}
</style>
