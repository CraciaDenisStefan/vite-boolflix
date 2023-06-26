import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=f56998b9711d7ce58ba2e78c795cad7b',
    apiUrlTV: 'https://api.themoviedb.org/3/search/tv?api_key=f56998b9711d7ce58ba2e78c795cad7b',
    movies:[],
    myUrl: '',
    myUrlTv:'',
    searchText:'',
    
})