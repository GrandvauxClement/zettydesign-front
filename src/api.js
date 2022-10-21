import axios from 'axios';

class Api {
    functionAxios = () => {
       return axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers:{
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("token")
            }
        })
    }
    baseUrl = process.env.REACT_APP_API_URL;
}


export default new Api();