import axios from "axios";
const API_BASE_URL = `${process.env.REACT_APP_API_URL}/stores/`;

class DissertationService {
    getDissertation() {
        //console.log(`${API_BASE_URL}?${params}`);
        return axios.get(`${API_BASE_URL}?${params}`);
    }
}

export default new DissertationService();