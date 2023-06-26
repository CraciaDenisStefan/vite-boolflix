<script>
import {store} from '../store.js';
export default {
    props:{
        oneMovie: Object
    },
    data(){
        return{
            store, 
        }
    }, 
}
</script>
<template >
    <div>
        {{ oneMovie.title }}
        {{ oneMovie.original_title }}
        {{ oneMovie.original_language }}
        {{ oneMovie.vote_average}}
    </div>
</template>
<style lang="scss" scoped>
    
</style>