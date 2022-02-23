import * as types from '../action-type'; // 777步
import { nanoid } from 'nanoid';

const userState = {
  token: '111',
  inputVal: '请输入',
  statelList: [
    { id: 1, done: true, name: '早上10点' },
    { id: 2, done: false, name: '中午12点' },
    { id: 3, done: true, name: '晚上9点' },
  ],
};
// store.dispatch({...})方法提交就到这里，action接收的是dispatch的对象，而这个对象是action的方法执行后返回的
export function user (state = userState, action) {
  // Reducer里只能接受state，不能改变state,返回新得对象

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
    newState.statelList.forEach(item => item.id === action.data.id ? item.done = action.data.done : item.done);
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

  //   // console.log('原生写法');
  // if (action.type === 'USER_DELETE_ITEM1') {
  //   let newState = JSON.parse(JSON.stringify(state));
  //   newState.statelList.splice(action.index, 1);
  //   return newState;
  // }

  return state;
};