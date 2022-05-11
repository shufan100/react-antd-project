/**
 * 1、该文件用于创建一个user的reducer，reducer的本质就是一个函数
 * 2、redecer函数会接收两个参数，之前的状态state,动作对象action
 */
import * as types from '../action-type';
import { nanoid } from 'nanoid';
// 
import { getToken, setToken, removeToken } from '@/utils/auth';
import { getUserInfo } from '@/mock';

// 初始化state的值
const initState = {
  token: getToken(), // 刷新获取token、点击登录还需要设置
  userInfo: getToken() ? getUserInfo(getToken()) : {},
  inputVal: '请输入',
  statelList: [
    { id: 1, done: true, name: '早上10点' },
    { id: 2, done: false, name: '中午12点' },
    { id: 3, done: true, name: '晚上9点' }
  ],
  count: 0
};
// Reducer里只能接受state，不能改变state,返回新得对象
// store.dispatch({...})方法提交就到这里，action接收的是两个值，一个type,一个data
export default function user (state = initState, action) {
  // ***** 登录 ***
  if (action.type === types.USER_SET_TOKEN) {
    setToken(action.data); //token存cookie
    return {
      ...state,
      token: action.data, // 设置token
      userInfo: getUserInfo(action.data) //设置用户信息
    };
  }

  // ***** 退出登录 ***
  if (action.type === types.USER_REMOVE_TOKEN) {
    removeToken();
    return {
      ...state,
      token: '', // 清空token
      userInfo: {} //清空用户信息
    };
  }

  // input输入 / 传空清除输入
  if (action.type === types.USER_SET_INPUTCHANGE) {
    return {
      ...state,
      inputVal: action.value
    };
  }
  // 添加至列表：将input值push到列表中
  if (types.USER_SET_LISTPUSH === action.type) {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputVal && newState.inputVal !== '请输入') {
      const obj = { id: nanoid(), name: newState.inputVal, done: false };
      newState.statelList.push(obj);
      newState.inputVal = '请输入';
    }
    return newState;
  }
  // 修改列表
  if (types.USER_EDIT_ITEM === action.type) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.statelList.forEach(item =>
      item.id === action.data.id ? item.done = action.data.done : item.done
    );
    return newState;
  }
  // 全选列表
  if (types.USER_CHENCKALL_ITEM === action.type) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.statelList.forEach(item => item.done = action.value);
    return newState;
  }
  // 删除列表
  if (types.USER_DELETE_ITEM === action.type) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.statelList.splice(action.index, 1);
    return newState;
  }

  // 求和-----------------
  switch (action.type) {
    case types.USER_COUNT_ADD:
      return {
        ...state,
        count: state.count + action.value * 1
      };
    case types.USER_COUNT_SUB:
      return {
        ...state,
        count: state.count - action.value * 1
      };
    case types.USER_COUNT_PADD:
      let newState = JSON.parse(JSON.stringify(state));
      if (state.count % 2 !== 0) {
        newState.count = state.count + action.value * 1;
      }
      return newState;
    default:
      return state;
  }

  //   // console.log('原生写法');
  // if (action.type === 'USER_DELETE_ITEM1') {
  //   let newState = JSON.parse(JSON.stringify(state));
  //   newState.statelList.splice(action.index, 1);
  //   return newState;
  // }

  // return state;
}
