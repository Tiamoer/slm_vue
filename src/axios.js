import axios from 'axios';
import { ElNotification } from 'element-plus';

// axios请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/';
// 请求拦截器
axios.interceptors.request.use(config => {
    // 为请求头添加Token
    config.headers.slm_token = window.localStorage.getItem('slmToken');
    return config;
}, error => {
    ElNotification.error({
        title: '错误',
        message: '请求超时!',
        duration: 0
    });
    return Promise.resolve(error);
})
// 响应拦截器
axios.interceptors.response.use(response => {
    // 获取token
    const slmToken = response.headers;
    console.log(slmToken);
    return response;
}, error => {
    if (error.response.status === 504||error.response.status === 404) {
        ElNotification.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (error.response.status === 403) {
        ElNotification.error({message: '权限不足,请联系管理员!'});
    }else {
        ElNotification.error({message: '未知错误!'});
    }
    return Promise.resolve(error);
})

export default axios