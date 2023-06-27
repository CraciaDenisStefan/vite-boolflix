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
            <div><i  v-for="(i, index) in 5" :key="index" :class="i <= star() ? 'fa-solid' : 'fa-regular'"   class=" fa-star"></i></div>
        </div>

    </div>

</template>
<style lang="scss" scoped>
    
</style>