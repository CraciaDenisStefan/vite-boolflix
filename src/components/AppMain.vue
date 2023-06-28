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
      <div class="row">
        <!-- Nel app main creaiamo un div con display flex in modo da avere tutti i div sulla stessa riga  -->
        <div class="d-flex text-white box">
            <!-- Cicliamo in interno di movie l'array che abbiamo in store movies popolato dalla axios/myUrl -->
            <div class="m-3 position-relative" v-for="(movie, index) in store.movies" :key="index"> 
                <!-- Al div dove andremo a mettere AppCard diamo un position relative per poi con un position absolut sistemare sopra le informazioni del film -->
                <!-- Passiamo tramite props i dati al figlio AppCard -->
                <AppCardMovie :oneMovie="movie"/>
             </div>
        </div>
      </div>
    </div>  
</template>
<style lang="scss" scoped>
//Nel box diamo un overflow x in modo da non uscire mai dalla pagina e creare uno slider 
 .box {
  overflow-x: hidden;
  overflow-y: hidden;
  scrollbar-width: thin; 
  &:hover{
    overflow-x:auto ;
  }
}
</style>