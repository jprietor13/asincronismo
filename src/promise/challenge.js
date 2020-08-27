const fetchData = require("../utils/fetchData")
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
.then(data => {
    console.log(data.info.count);
    //retorna una nueva peticion para el siguiente then
    return fetchData(`${API}${data.results[0].id}`);
})
.then(data => {
    console.log(data.name);
    return fetchData(data.origin.url);
})
.then(data => {
    console.log(data.dimension);
})
.catch(err => console.log(err));