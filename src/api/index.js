import axios from "../utils/http"
import path from "./path"

const api = {
    getChengpin(){
        key: 9d61d6fc90b09dc054ecd3df188852e7
        return axios.get(path.baseUrl + path.chengpin)
    }
}

export default api;