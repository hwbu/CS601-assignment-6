const {createApp} = Vue

let spring="photos/Spring.jpg";
let summer="photos/Summer.jfif";
let fall="photos/Fall.jfif";
let winter="photos/Winter.jfif";
const seasons=[spring, summer, fall, winter]

createApp({
    data(){
        return{
            seasons,
            seasonPhoto: seasons[id],
            places:"",
        } 
    },
    methods:{
        updateSeason(id){
            this.seasonPhoto=this.seasons[id];
        },
        resetSeason(id){
            this.seasonPhoto=seasons[id];
        },
        loadData(){
            fetch('files/places.json')
            .then( res => res.json())
            .then( data => this.places = data)
        },
    },
}).mount('#app')