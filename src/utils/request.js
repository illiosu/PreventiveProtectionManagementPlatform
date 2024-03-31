
import axios from 'axios'

import { ElMessage } from 'element-plus'
// if (import.meta.env.MODE === 'development') {
//     // 本地环境逻辑
//     // console.log('当前为本地环境');
//     var baseUrl = '/api/api';
// } else if (import.meta.env.MODE === 'production') {
//     var baseUrl = '/api';
// }
var baseURL = '/api/api'
// var baseURL = '/api'
const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL + baseURL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   // token: localStorage.getItem('token') || '',
  // },

  // timeout: 50000,
})

console.log(import.meta.env.MODE);

// 2.请求拦截器
request.interceptors.request.use(config => {//请求拦截
  var token = localStorage.getItem("token")
  if (token) {
    config.headers.set("token", token)
  }
  if (config.responseType) {
    config.responseType = 'blob'
  }
  // config.headers["Authorization"] = localStorage.getItem("token");
  return config
}, err => {
  ElMessage.error("请求出错", err)
})

request.interceptors.response.use(res => {//响应拦截
  if (res.status == 200) {
    // console.log('响应拦截', res);
    if (res.data.code == 500) {
      // ElMessage.error("登录过期，请重新登录")
      if (res.data.msg == "token失效" || res.data.msg == "token过期") {
        localStorage.removeItem("token")
        setTimeout(() => {
          window.location.href = "/NotFound"
        }, 1000)
      }
    }
    return res.data
  } else {
    console.log("连接出错")
  }

}, error => {
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.ElMessage = '错误请求'
        break;
      case 401:
        error.ElMessage = '未授权，请重新登录'
        break;
      case 403:
        error.ElMessage = '拒绝访问'
        break;
      case 404:
        error.ElMessage = '请求错误,未找到该资源'
        // window.location.href = "/NotFound"
        break;
      case 405:
        error.ElMessage = '请求方法未允许'
        break;
      case 408:
        error.ElMessage = '请求超时'
        break;
      case 500:
        error.ElMessage = '请求出错'
        break;
      case 501:
        error.ElMessage = '网络未实现'
        break;
      case 502:
        error.ElMessage = '网络错误'
        break;
      case 503:
        error.ElMessage = '服务不可用'
        break;
      case 504:
        error.ElMessage = '网络超时'
        break;
      case 505:
        error.ElMessage = 'http版本不支持该请求'
        break;
      default:
        error.ElMessage = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      ElMessage.error('服务器响应超时，请刷新当前页')
    }
    error.ElMessage = '连接服务器失败'
  }

  ElMessage.error(error.ElMessage)

})
//4.导入文件
export default request