import axios from 'axios';

class Api {
    functionAxios = () => {
       return axios.create({
            baseURL:"http://localhost:9000/"
        })
    }
    baseUrl = "http://localhost:9000/";
}


export default new Api();