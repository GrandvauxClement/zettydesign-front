import Api from "../api";

class ServiceService {

    getAllService() {
        return Api.functionAxios().get('api/service');
    }

    getOneService(id){
        return Api.functionAxios().get('api/service' + id,)
    }
}
export default new ServiceService();