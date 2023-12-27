<template lang="">
  <section id='cards-wrapeper' class="container bg-white" >
    <div class="title row">
        <h2 class="text-white">
            Found {{ store.cardsList.length }} cards
        </h2>
    </div>
    <div class="cards row">
        <CardElement  v-for="card in store.cardsList" :key="card.id" :card="card"/>
    </div>
  </section>
</template>

<script>
import { setTransitionHooks } from 'vue';
import CardElement from './CardElement.vue';
import axios from 'axios';
import { store } from '../js/store';

export default {
    data() {
        return {
            //cardsList : [],
            //apiUrl :'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0',
            store
        }
    },

    components: {
        CardElement
    },

    methods: {
        
    },

    created() {
        this.store.getCards();
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