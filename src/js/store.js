import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0',
    cardsList: [],

    getCards: function( archetypeFilter = null ){
            const url = (this.archetypeFilter !== null) ? '${this.apiUrl}&archetype=${archetypeFilter}' : this.apiUrl;
            axios.get(url)
                .then((response) => {
                    console.log(response);
                    this.cardsList = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
});