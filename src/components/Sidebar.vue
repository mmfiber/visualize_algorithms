<template lang="pug">
  v-navigation-drawer.ma-0.fill-height.elevation-0(width="100%")
    v-list(nav link)
      v-list-item(v-for="(item, name) in items" :key="name" link)
        v-list-item-content(@click="emit(name)")
          v-list-item-title.body {{ item.title }}
</template>

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