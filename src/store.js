import { reactive } from 'vue';

export const store = reactive({
    //in apiUrl mettiamo il link della nostra api 
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=f56998b9711d7ce58ba2e78c795cad7b',
    //in myUrl inseriamo il link della api + i filtri per prendere cio che ci interessa
    myUrl: '',
    //in movies inseriamo i dati che ci interessato , cioe i dati filtrati dall link api tramite myUrl
    movies:[],
    //inseriamo in store la searchText in modo da poterla condividere con gli altri componenti 
    searchText:'',
    
})