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
    <div>
        <input type="text" placeholder="film" v-model="store.searchText" @keyup.enter="$emit('search')">
        <button @click="$emit('search')">click</button>
    </div>
</template>
<style lang="scss" scoped>
    
</style>