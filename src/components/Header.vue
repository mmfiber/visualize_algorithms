<template lang="pug">
  v-app-bar.primary(prominent dark app)
    v-toolbar-title.display-1 Viualize Algorithm
    v-spacer
    v-toolbar-items
      v-btn.headline(v-for="item in items" :key="item" @click="push(item)" text) {{ item }}
</template>

<style lang="sass" scoped>
  .v-app-bar
    position: sticky
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