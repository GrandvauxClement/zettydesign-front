import Api from "../api";

class UserService {

    login(email, password) {
        return Api.functionAxios().post('api/login', {
            email: email,
            password: password
        });
    }

}
export default new UserService();