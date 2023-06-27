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
    <div class="container-fluid ">
        <div class="row text-white ">
            <div class="col-12 col-sm d-flex justify-content-center" v-for="(movie, index) in store.movies" :key="index"> 
                <AppCardMovie :oneMovie="movie"/>
             </div>
        </div>
    </div>
    
   
</template>
<style lang="scss" scoped>
    
</style>