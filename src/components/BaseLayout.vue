<template lang="pug">
  .fill-height.white
    Header
    main
      v-containers
        v-row.md.fill-height(no-gutter)
          .hidden-sm-and-down.col-2.fill-height.py-0.pr-0.sticky
            slot(name="sidebar")
          .col-12.col-md-10
            slot(name="main")
</template>

<style lang="sass">
  .white
    background: "#ffffff"
  .md
    margin-top: 64px
    margin-bottom: -64px
  .sticky
    position: sticky
    top: 64px !important
    height: calc(100vh - 64px)
</style>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header
  },
}
</script>