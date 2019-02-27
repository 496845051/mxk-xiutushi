<template>
  <div>
    <draggable
      element="div"
      class="img-list"
      v-model="mains"
      :options="{ animation: 300 }"
    >
      <div v-for="item in mains" :key="item.id" style="text-align:center">
        <img :src="item.source" style="width:100%" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  props: {
    value: {
      type: Array
    }
  },
  components: {
    draggable
  },
  computed: {
    mains: {
      set (value) {
        this.$emit('input', value)
      },
      get () {
        return this.value
      }
    }
  }
}
</script>

<style scoped></style>
