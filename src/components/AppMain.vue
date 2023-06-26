<script>
import {store} from '../store.js';
import AppCardMovie from './AppCardMovie.vue';


export default {
    components:{
        AppCardMovie,
    },
    data(){
        return{
            store, 
        }
    },
}
</script>
<template >
    <div  v-for="(movie, index) in store.movies" :key="index">
        <AppCardMovie :oneMovie="movie"/>
    </div>
</template>
<style lang="scss" scoped>
    
</style>