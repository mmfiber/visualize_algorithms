<template lang="pug">
  .main_wrapper.fill-height
    Header
    v-containers
      v-row.fill-height(no-gutter)
        .col-2.fill-height.py-0.pr-0
          slot(name="sidebar")
        .col-10(offset=3).pa-0
          slot(name="main")
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header
  },
}
</script>