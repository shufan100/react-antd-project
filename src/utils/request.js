import axios from 'axios';
import store from '@/store';

//创建一个axios示例
const service = axios.create({
  baseURL: '/api1', // api 的 base_url
  timeout: 50000 // request timeout
});

// 请求拦截器
service.interceptors.request.use(config => {
  // console.log('请求拦截器>>>', config);

  // 根据接口修改代理
  if (config.url.indexOf('cars') !== -1) {
    config.baseURL = '/api2';
  } else {
    config.baseURL = '/api1';
  }

  // 让每个请求携带token--
  if (store.getState().user.token) {
    config.headers.token = store.getState().user.token;
  }

  return config;
},
  // 发送请求错误：(创建失败Promise对象并将error数据返回)
  error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  // 请求返回成功
  response => {
    const res = response.data;
    // console.log(res, '--');
    if (res.code !== 50000) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 请自行在引入 MessageBox
        // import { Message, MessageBox } from 'element-ui'
        // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   // store.dispatch('FedLogOut').then(() => {
        //   window.location.reload() // 为了重新实例化vue-router对象 避免bug
        //   // })
        // })
      }
      return Promise.reject('接口状态不为200！');
    } else {
      return response.data;
    }
  },
  //请求返回失败：(创建失败Promise对象并将error数据返回)
  error => Promise.reject(error)
);

export default service;
