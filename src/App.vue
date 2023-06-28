<script>
import axios from 'axios';
//inseriamo axio e i nostro componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import {store} from './store.js';

export default{
    // diciamo che possiamo usarli
    components:{
      AppHeader,
      AppMain,
    },
    data(){
        return{
            store,
        }
      },
    mounted(){
        this.searchMovie();
  
      },
    methods: {
        searchMovie(){
            //prendiamo url del api dal store e lo facciamo spostiamo in myUrl
            store.myUrl = store.apiUrl 
            if(store.searchText !== ''){
                //se la seach bar non e vuota allora al url del app aggiungiamo il valore di searchText
                store.myUrl += `&query=${store.searchText}`;
                store.lastSearch = `${store.searchText}`;
            }else{
                //altrimenti generiamo gli avanger come titoli di default al apertura della pagina
                store.myUrl += `&query=avengers`;
                store.lastSearch= ''
              
                
            }
            //alla fine di ogni invio sulla searchbar la svuotiamo
            store.searchText='',
            //con axios prendiamo i dati che ci interessano dal api e li inseriamo in movies 
        axios.get(store.myUrl).then((response)=>{
        store.movies=response.data.results
        
        })
     
        },
        
    },
}
</script>

<template>
<!-- Aggiungiamo i nostri componenti  -->
    <AppHeader @search="searchMovie"/>

    <AppMain/>

</template>

<style  lang="scss">
@use './styles/generals.scss'as *;
@use './styles/partials/variables'as *
</style>
