<script>
import {flags} from '../index.js';
export default {
    props:{
        oneMovie: Object,
    },
    data(){
        return{
            flags,

        }
    },
    computed: {
        flags(){
            //usando una funzione in computed prendiamo da index.js flag e facciamo passare al interno la lingua data dal api
            return flags[this.oneMovie.original_language]
    }
  },
  methods:{
        star(){
            //con la funzione star prendiamo il voto dal api , lo arrotondiamo e lo dividiamo in due ( il voto puo arrivare a 10 invece le stelle sono 5 )
            return Math.round(this.oneMovie.vote_average / 2)
        },

    }
}
</script>
<template >
    <div>
         <!--Inizio card   -->
        <div>
            <!-- Inseriamo la nostra immagine di copertina , se e presente un poster path allora lo aggiungiamo al nostro link altrimenti inseriamo un immagine interna-->
            <img v-if="oneMovie.poster_path !== null"  class="cover" :src="`https://image.tmdb.org/t/p/w342/${oneMovie.poster_path}`">
            <img v-else class="img_no_good cover" src="../assets/404.jpg" alt="">
        </div>
        <div class="describtion  m-2">
            <!-- nelal descrizione  inseriamo titolo, titolo originale, lingua, voto, e descrizione del film  -->
            <!-- prendendo sia serie che film ussiamo OR per dire che al titolo inseriamo o title cioe fil o name cioe serie  -->
            <h4>Title: {{ oneMovie.title || oneMovie.name}}</h4>
            <h5>Original Title: {{ oneMovie.original_title || oneMovie.original_name }}</h5>
            <div>Language: <img :src="flags" alt=""></div>
            <div >
                <!-- Al interno di vote facciamo un ciclo for di i fino a 5  -->
                <!-- Con un operatore ternario  li diciamo che se i è uguale o minore  rispetto al risultato della funzione star allora metto la stella piena altrimenti vuota  -->
                Vote: <i  v-for="(i, index) in 5" :key="index" :class="i <= star() ? 'fa-solid' : 'fa-regular'"   class="text-warning fa-star"></i>
            </div>
            <p class="mt-1">{{ oneMovie.overview }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.describtion {
    //Posizioniamo con absolute tutta la descrizione sopra l'immagine e lo stilizziamo
    background-color: rgba(100, 99, 99, 0.568);
    width: 80%;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 1px 2px 12px 3px rgba(0, 0, 0, 0.79);
    position: absolute;
    top: 5%;
    left: 7%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p{
        padding: 5px;
        max-height: 8rem;
        overflow: hidden;

        &:hover{
            overflow: auto;
            scale: 1.1;
            scrollbar-width: thin;

        }
    }
}
.position-relative:hover .cover {
    filter: blur(5px);
}
.position-relative:hover .describtion {
    opacity: 1;
    transition: scale 0.5s ease-in-out;
    &:hover{
        background-color: rgba(58, 58, 58, 0.705);
        scale: 1.2;    
    }
}
.cover {
    border-radius: 2rem;
    box-shadow: 0px 0px 16px 6px rgba(78, 78, 78, 0.61);
    transition: filter 0.3s ease-in-out;
}
.img_no_good{
    width: 342px;
}
</style>