import axios from "axios";

class UserService {
    getUsers() {
        return axios.get(`http://127.0.0.1:8000/users/`);
    }
}

export default new UserService();