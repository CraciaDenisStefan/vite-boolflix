<script>
import {store} from '../store.js';
export default {
    data(){
        return{
            store, 
        }
    }, 
}
</script>
<template >
    <div class="container-fluid bg-black">
        <div class="row py-4 justify-content-between ">
            <div class="col">
                <img src="https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
            </div>
            <div class="col text-end">
                <input type="text" placeholder="Cerca film o serie tv" v-model="store.searchText" @keyup.enter="$emit('search')">
                <button class="btn btn-danger mx-2" @click="$emit('search')">Cerca</button>
            </div>
        </div>
       
    </div>
</template>
<style lang="scss" scoped>
    
</style>