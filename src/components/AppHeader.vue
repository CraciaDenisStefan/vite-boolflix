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
            <!-- In app Header creaiamo una row con due col -->
            <div class="col ">
                <!-- Nella prima col inseriamo semplicemente il logo -->
                <img src="https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
            </div>
            <div class="col d-flex justify-content-end">
                <!-- Nella seconda col inseriamo la nostra barra di ricerca + il pulsante cerca -->
                <input type="text" class="border border-danger rounded" placeholder="Cerca film o serie tv" v-model="store.searchText" @keyup.enter="$emit('search')">
                <!-- Il pulsante cerca va in display none se la pagina si restringe sotto i 576px -->
                <button class="btn btn-danger mx-1 d-none d-sm-block" @click="$emit('search')">Cerca</button>
            </div>
        </div>
        <!-- Se last search viene popolato allora faremmo uscire il pulsante home che riporta alla schermata -->
        <div class="d-flex justify-content-center pb-4" v-if="store.lastSearch !== ''">
            <button  class="d-block btn btn btn-secondary mx-1  home " @click="$emit('search')"><i class="fa-solid fa-house m-1"></i>Home</button>
        </div>
        
       
    </div>
</template>
<style lang="scss" scoped>
    .home{
        max-width: 150px;
        text-align: center;
    }
</style>