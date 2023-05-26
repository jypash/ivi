import axios from "axios";



const  instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "RBBN5EQ-GAWM489-MH8NRDW-TYN5Z2J"}
})






export default instance