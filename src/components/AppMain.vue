<template lang="">
  <main>
    <CardsWrapper />
  </main>
</template>

<script>
import CardsWrapper from './CardsWrapper.vue';

export default {
    components: {
        CardsWrapper
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