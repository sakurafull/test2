import axios from "axios";
import { error } from "console";
import { config } from "process";
import querystring from "querystring"

const instance = axios.create({
    timeout:5000
})

//拦截器

//发送时
instance.interceptors.request.use(
    config => {
        if(config.methods === "post"){
            config.date = querystring.stringify(config.date)
        }
        return config
    },
    error=> {
        return Promise.reject(error)
    }
)

//发送前
instance.interceptors.response.use(
    response => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error => {

    }
)

export default instance;