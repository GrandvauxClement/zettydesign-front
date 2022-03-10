import Api from "../api";

class MessageService {
    postMessage(message){
        return Api.functionAxios().post('api/message', {message:message});
    }

    deleteMessage(id) {
        return Api.functionAxios().delete('api/message/'+id);
    }

    getAllMessage() {
        return Api.functionAxios().get('api/message');
    }

}

export default new MessageService();