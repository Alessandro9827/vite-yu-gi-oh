<template lang="">
    <div class="container">
        <select class="form-select mb-3" aria-label="Default select example" @change="selectArchetype(selectedArchetype)"
         v-model="selectedArchetype">
            <option :value="null" selected>Selected archetype</option>
            <option v-for="(archetype, index) in archetypesList" :key="index" value="archetype.archetype_name">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../js/store';

export default {

    data () {
        return {
            archetypesList : [],
            apiUrl : 'https://db.ygoprodeck.com/api/v7/archetypes.php',
            selectedArchetype: '',
            store
        }
    },

    methods: {
        getArchetypes() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data);
                    this.archetypesList = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        selectArchetype(archetype){
            this.store.getCards(archetype);
        }
    },

    created () {
        this.getArchetypes();
    },
}
</script>

<style>

</style>