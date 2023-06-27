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
    <div class="position-relative mt-4">      
   
            <img class="cover" :src="`https://image.tmdb.org/t/p/w300/${oneMovie.poster_path}`"> 
  
      

        <div class="describtion  m-2">
           <h4>Title: {{ oneMovie.title || oneMovie.name}}</h4>
           <h5>Original Title: {{ oneMovie.original_title || oneMovie.original_name }}</h5>
           <div>Language: <img :src="flags" alt=""></div>
           <div >
             Vote: <i  v-for="(i, index) in 5" :key="index" :class="i <= star() ? 'fa-solid' : 'fa-regular'"   class="text-warning fa-star"></i>
            </div>
            <div>
                <p>{{ oneMovie.overview }}</p>
            </div>
     </div>

        
        
    </div>

</template>
<style lang="scss" scoped>   
.describtion {
    background-color: rgba(100, 99, 99, 0.568);
    width: 80%;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 1px 2px 12px 3px rgba(0, 0, 0, 0.79);
    position: absolute;
    top: 5%;
    opacity: 0; 
    transition: opacity 0.3s ease-in-out; 

    p{
        padding: 5px;
        max-height: 8rem;
        overflow: auto;
    }
}

.position-relative:hover .cover {
    filter: blur(5px); 
}

.position-relative:hover .describtion {
    opacity: 1; 
}

.cover {
    transition: filter 0.3s ease-in-out; 
}
 
 
    
</style>