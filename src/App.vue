<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import {store} from './store.js';

export default{
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
            store.myUrl = store.apiUrl 
            if(store.searchText !== ''){
                store.myUrl += `&query=${store.searchText}`;
            }else{
                store.myUrl += `&query=movies`;
              
                
            }
            store.searchText='',
        axios.get(store.myUrl).then((response)=>{
        store.movies=response.data.results
        
        })
     
        },
        
    },
}
</script>

<template>

    <AppHeader @search="searchMovie"/>

    <AppMain/>

</template>

<style scoped lang="scss">
@use './styles/generals.scss'as *;
@use './styles/partials/variables'as *
</style>
