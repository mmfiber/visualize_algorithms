<template lang="pug">
  v-card.fill-height.elevation-0(width="100%")
    v-card-title.justify-center.headline {{ title }}
    slot
    v-card-actions.justify-center
      v-btn.primary.body(text @click="start" x-large) start
      v-btn.primary.body(text @click="reset" x-large) reset
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    start() {
      this.$emit("start")
    },
    reset() {
      this.$emit("reset")
    },
  }
};
</script>
