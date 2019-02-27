<template>
  <div>
    <img
      :src="image.source"
      style="width:100%"
      @dblclick="handleShowCropper"
      v-show="!cropperShow"
    />
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'

export default {
  data () {
    return {
      cropperShow: true,
      cropOptions: {}
    }
  },
  created () {},
  props: {
    image: {
      type: Object
    },
    lights: {
      type: Array
    }
  },
  methods: {
    handleShowCropper () {
      this.cropperShow = true
    }
  },
  components: {
    VueCropper
  }
}
</script>

<style scoped></style>
