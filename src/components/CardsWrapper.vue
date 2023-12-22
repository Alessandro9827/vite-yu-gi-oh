<template lang="">
  <section id='cards-wrapeper' class="container" >
    <div class="row">
        <h2>
        found N cards
    </h2>
    </div>
    <div class="cards row">
        <CardElement  v-for="card in cardsList" key="card.id" :card="card"/>
    </div>
  </section>
</template>

<script>
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
                Then((response) => {
                    console.log(response);
                    this.cardsList = response.data.data;
                })
                .cath(function (error){
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

    h2 {
        background-color: $dark-bg;
        color: white;
    }
 }
</style>