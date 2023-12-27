<template lang="">
  <main>
    <AppSearch />
    <CardsWrapper />
  </main>
</template>

<script>
import AppSearch from './AppSearch.vue';
import CardsWrapper from './CardsWrapper.vue';

export default {
    components: {
        CardsWrapper,
        AppSearch
    }
}
</script>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

  main {
    padding: 4rem;
    background-color: $primary-bg;
  }

</style>