<template lang="">
  <article class="p-0">
    <section class=image>
        <img :src="card.card_images[0].image_url" alt="">
    </section>
    <h3 class="text-white text-uppercase fs-6">
        {{ card.name }}
    </h3>
    <p>
        {{ card.archetype }}
    </p>
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
@use '../styles/partials/variables.scss' as *;

article {
    width: calc((100% / 5) - 1rem );
    margin: 0 .5rem;
    background-color: $primary-bg;
    text-align: center;

    img {
        width: 100%;
    }
}
</style>