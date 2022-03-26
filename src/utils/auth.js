import Cookies from 'js-cookie';
//定义cookie的token字段名 
const tokenKey = 'token';
// 设置token值
export const setToken = (token) => Cookies.set(tokenKey, token);
// 获取token值
export const getToken = () => Cookies.get(tokenKey);
// 清除token值
export const removeToken = () => Cookies.remove(tokenKey);
