import Api from "../api";

class UserService {

    login(email, password) {
        return Api.functionAxios().post('api/login', {
            email: email,
            password: password
        });
    }

    checkToken() {
        return Api.functionAxios().get('api/login/checkToken');
    }

}
export default new UserService();