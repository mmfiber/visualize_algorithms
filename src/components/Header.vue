<template lang="pug">
  v-app-bar.primary(fixed dark app)
    v-toolbar-title.headline Viualize Algorithm
    v-spacer
    v-toolbar-items
      v-btn.body(v-for="item in items" :key="item" @click="push(item)" text) {{ item }}
</template>

<style lang="sass" scoped>
  .v-toolbar__content > div
    align-self: center !important
</style>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["sort"],
    }
  },
  methods: {
    push(r) {
      this.$router.push(r)
    }
  }
}
</script>