import axios from 'axios'

// 配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
const contentType = 'application/json;charset=UTF-8'

const instance = axios.create({
    timeout: 5000,
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': contentType
    }
})
// axios的全局配置
instance.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

// 添加请求拦截器(post只能接受字符串类型数据)
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    res => {
        // 请求通用处理
        return res.data
    },
    err => {
        console.log('请求出错',err);
        return true
    }
)

export default instance;