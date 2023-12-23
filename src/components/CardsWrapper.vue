<template lang="">
  <section id='cards-wrapeper' class="container" >
    <div class="title row">
        <h2 class="text-white">
            Found {{ cardsList.length }} cards
        </h2>
    </div>
    <div class="cards row">
        <CardElement  v-for="card in cardsList" :key="card.id" :card="card"/>
    </div>
  </section>
</template>

<script>
import { setTransitionHooks } from 'vue';
import CardElement from './CardElement.vue';
import axios from 'axios';

export default {
    data() {
        return {
            cardsList : [],
            apiUrl :'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0'
        }
    },

    components: {
        CardElement
    },

    methods: {
        getCards() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.data);
                    this.cardsList = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    created() {
        this.getCards();
    },

}
</script>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

 section#cards-wrapper {
    background-color: white;
 }

h2 {
    background-color: $dark-bg;
    color:white;
}
 
</style>