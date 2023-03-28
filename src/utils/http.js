import axios from "axios";
import { error } from "console";
import { cosh } from "core-js/core/number";
import { config } from "process";
import querystring from "querystring"

const errorway = (status,info) => {
    switch(status){
        case 400:
            console.log("语义错误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

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
        const { response } = error;
        //错误信息
        errorway(response.status,response.info)
    }
)

export default instance;