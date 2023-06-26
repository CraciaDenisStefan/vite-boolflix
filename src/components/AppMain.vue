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
    <div>
        <AppCardMovie/>
    </div>
</template>
<style lang="scss" scoped>
    
</style>