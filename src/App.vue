<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import {store} from './store.js';

export default{
    components:{
      AppHeader,
      AppMain,
    },
    data(){
        return{
            store,
        }
      },
}
</script>

<template>

    <AppHeader/>

    <AppMain/>

</template>

<style scoped lang="scss">
@use './styles/generals.scss'as *;
@use './styles/partials/variables'as *
</style>
