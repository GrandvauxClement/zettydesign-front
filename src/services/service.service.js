import AxiosApiUrl from "../api";

class ServiceService {

    getAllService() {
        return AxiosApiUrl.get('api/service');
    }

    getOneService(id){
        return AxiosApiUrl.get('api/service/' + id,)
    }
}
export default new ServiceService();