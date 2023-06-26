<script>
import {store} from '../store.js';
import {flags} from '../index.js';
export default {
    props:{
        oneMovie: Object
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
    
}
</script>
<template >
    <div>
        {{ oneMovie.title }}
        {{ oneMovie.original_title }}
        <img :src="flags" alt="">
        {{ oneMovie.vote_average}}

    </div>
</template>
<style lang="scss" scoped>
    
</style>