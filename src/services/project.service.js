import Api from "../api";

class ProjectService {

    getAllProject() {
        return Api.functionAxios().get('api/project');
    }

    getOneProject(id){
        return Api.functionAxios().get('api/project/' + id,)
    }
}
export default new ProjectService();