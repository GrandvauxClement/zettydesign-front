import Api from "../api";

class MessageService {
    postMessage(message){
        return Api.functionAxios().post('api/message', {message:message});
    }

}

export default new MessageService();