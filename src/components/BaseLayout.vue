<template lang="pug">
  .fill-height
    Header
    main
      v-containers
        v-row.md.fill-height(no-gutter)
          .col-2.fill-height.py-0.pr-0.sticky
            slot.absolute(name="sidebar")
          .col-10(offset=3).pa-0
            slot(name="main")
</template>

<style lang="sass">
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