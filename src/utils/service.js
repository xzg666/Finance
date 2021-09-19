import axios from 'axios' //引入axios
import { Message } from 'element-ui';
import {getToken} from './getinfo.js'

const service = axios.create({
    baseURL: 'localhost:8080',
    timeout: 8000,
  
  });

  // 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const data = response.data
    // console.log("响应拦截拿到的数据",data)
    if( data.code == 200){
        return data;
    }else{
        Message({
            showClose: true,
            message: data.message,
            type: 'error'
        })//提示错误信息
        return Promise.reject(data.message);//同时抛出错误信息
    }
    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });



  // 添加请求拦截器
service.interceptors.request.use(function (config) {
    // console.log("请求拦截",config)
    if( getToken() ){
        config.headers.token = getToken() //如果有token了那么存放在请求头中，以便请求权限使用。但是具体存放在请求头还是哪里和后端协商
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

export default service