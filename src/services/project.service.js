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

    addProject(project, newFileName){
        return Api.functionAxios().post('api/project',
            {
                title: project.title,
                type: project.type,
                description: project.description,
                tag: project.tag,
                createdAt: project.createdAt,
                videoLink: project.videoLink,
                images: newFileName
            }
        )
    }

    updateProject(project, newFileName){
        return Api.functionAxios().post('api/project/'+project._id,
            {
                title: project.title,
                type: project.type,
                description: project.description,
                tag: project.tag,
                createdAt: project.createdAt,
                videoLink: project.videoLink,
                images: newFileName
            }
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