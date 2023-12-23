<template lang="">
  <AppHeader/>
  <AppMain/>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/variables.scss' as *;
</style>
