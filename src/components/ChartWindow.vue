<template lang="pug">
  v-card.fill-height.elevation-0(width="100%")
    v-card-title.justify-center.display-1 {{ title }}
    slot
    v-card-actions.justify-center
      v-btn.primary.subtitle-1(text @click="start" x-large) start
      v-btn.primary.subtitle-1(text @click="reset" x-large) reset
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
