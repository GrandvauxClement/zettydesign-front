import axios from 'axios';

class Api {
    functionAxios = () => {
       return axios.create({
            baseURL:"http://localhost:9000/",
            headers:{
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("token")
            }
        })
    }
    baseUrl = "http://localhost:9000/";
}


export default new Api();