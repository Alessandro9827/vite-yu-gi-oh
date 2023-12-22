<template lang="">
  <article>
    <h3>
        {{ card.name }}
    </h3>
  </article>
</template>

<script>
export default {
    props: {
        card : {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/patials/variables.scss' as *;

    article {
        width: 100%;
        background-color: $primary-bg;
    }
</style>