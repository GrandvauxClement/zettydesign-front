import Api from "../api";

class ProjectService {

    getAllProject() {
        return Api.functionAxios().get('api/project');
    }

    getProjectByKind(type) {
        return Api.functionAxios().post('api/project/byKind', {
            kind: type
        });
    }

    getOneProject(id){
        return Api.functionAxios().get('api/project/' + id,)
    }

    addProject(projectFromData){
        return Api.functionAxios().post('api/project',
            projectFromData
        )
    }

    updateProject(id, formUploadData){
        return Api.functionAxios().post('api/project/' + id,
            formUploadData
        )
    }

    deleteProject(id){
        return Api.functionAxios().delete('api/project/'+id);
    }

    removeImage(fileName){
        return Api.functionAxios().delete('api/project/removeImage/'+fileName)
    }
}
export default new ProjectService();