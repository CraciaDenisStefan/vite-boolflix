<script>
import {store} from '../store.js';
import {flags} from '../index.js';
export default {
    props:{
        oneMovie: Object,
    },
    data(){
        return{
            store, 
          
        }
    },
    computed: {
        flags(){
            return flags[this.oneMovie.original_language] 
    }
  },
  methods:{
        star(){
            let vote = Math.round(this.oneMovie.vote_average / 2);
            return vote
            
        },
        emtyStar(){
            let emty = 5 - this.star();
            return emty
        }
    }
}
</script>
<template >
    <div>      
        <img :src="`https://image.tmdb.org/t/p/w300/${oneMovie.poster_path}`"> 
        {{ oneMovie.title || oneMovie.name}}
        {{ oneMovie.original_title || oneMovie.original_name }}
        <img :src="flags" alt="">
        <div>
            <div v-for="(stars, index) in star()" :key="index" ><i class="fa-solid fa-star"></i></div>
            <div v-for="(star, index) in emtyStar() " :key="index" ><i class="fa-regular fa-star"></i></div>
        </div>

    </div>

</template>
<style lang="scss" scoped>
    
</style>