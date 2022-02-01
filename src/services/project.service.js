import AxiosApiUrl from "../api";

class ProjectService {

    getAllProject() {
        return AxiosApiUrl.get('api/project');
    }

    getOneProject(id){
        return AxiosApiUrl.get('api/project/' + id,)
    }
}
export default new ProjectService();