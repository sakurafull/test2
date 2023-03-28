import axios from "../utils/http"
import path from "./path"

const api = {
    getChengpin(){
        return axios.get(path.baseUrl + path.chengpin)
    }
}

export default api;