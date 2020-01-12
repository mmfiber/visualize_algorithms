<template lang="pug">
  v-card.fill-height.elevation-0(width="100%")
    v-card-title.justify-center.headline {{ title }}
      v-menu(transition="slide-y-transition")
        template(v-slot:activator="{ on }")
          v-btn.ml-2.hidden-md-and-up(v-on="on" icon) 
            v-icon mdi-dots-vertical
        v-list
          v-list-item(v-for="(item, name) in types" :key="name" @click="emit(name)")
            v-list-item-title {{ item.title }}

    slot
    v-card-actions.justify-center
      v-btn.body.elevation-0(@click="start" large color="primary" :disabled="isDrawing") start
      v-btn.body.elevation-0(@click="reset" large color="primary" :disabled="isDrawing") reset
      v-btn.body.elevation-0(@click="stop" large color="primary" :disabled="!isDrawing") stop
</template>

<style lang="sass">
  .capitalize
    text-transform: capitalize
</style>

<script>
export default {
  props: {
    title: String,
    types: Object,
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
    emit(item) {
      this.$emit("changed", item)
    },
  }
};
</script>
