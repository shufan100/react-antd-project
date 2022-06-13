import axios from 'axios'
import store from '@/store'

//创建一个axios示例
const service = axios.create({
  baseURL: '/api1', // api 的 base_url
  timeout: 50000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // console.log('请求拦截器>>>', config);

    // 根据接口修改代理
    if (config.url.indexOf('cars') !== -1) {
      config.baseURL = '/api2'
    } else {
      config.baseURL = '/api1'
    }

    // 让每个请求携带token--
    if (store.getState().user.token) {
      config.headers.token = store.getState().user.token
    }

    return config
  },
  // 发送请求错误：(创建失败Promise对象并将error数据返回)
  error => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  // 请求返回成功
  response => {
    const res = response.data
    if (res.code === '200') {
      return response.data
    } else {
      return Promise.reject('接口状态不为200！')
    }
  },
  //请求返回失败：(创建失败Promise对象并将error数据返回)
  error => Promise.reject(error)
)

export default service
