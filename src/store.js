import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=f56998b9711d7ce58ba2e78c795cad7b',
    movies:[],
    myUrl: '',
    searchText:'',
    
})