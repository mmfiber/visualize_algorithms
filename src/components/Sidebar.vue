<template lang="pug">
  v-navigation-drawer.ma-0
    v-list(nav link)
      v-list-item(v-for="(item, name) in items" :key="name" link)
        v-list-item-content(@click="emit(name)")
          v-list-item-title.headline {{ item.title }}
</template>

<style lang="sass">
  aside
    width: 100% !important
</style>

<script>
export default {
  props: {
    items: Object,
  },
  methods: {
    emit(item) {
      this.$emit("clicked", item)
    }
  }
}
</script>