<template lang="pug">
  v-card.fill-height.elevation-0(width="100%")
    v-card-title.justify-center.headline {{ title }}
    slot
    v-card-actions.justify-center
      v-btn.body.elevation-0(@click="start" large color="primary") start
      v-btn.body.elevation-0(@click="reset" large color="primary" :disabled="isDrawing") reset
      v-btn.body.elevation-0(@click="stop" large color="primary" :disabled="!isDrawing") stop
</template>

<script>
export default {
  props: {
    title: String,
    drawId: Number,
  },
  computed: {
    isDrawing() {
      return Boolean(this.drawId)
    }
  },
  methods: {
    start() {
      this.$emit("start")
    },
    reset() {
      this.$emit("reset")
    },
    stop() {
      this.$emit("stop")
    },
  }
};
</script>
