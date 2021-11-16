import * as types from '../action-type';

const userState = {
  inputVal: '请输入',
  statelList: ['早上10点', '中午12点', '晚上9点'],
};

export function user (state = userState, action){
  // Reducer里只能接受state，不能改变state,返回新得对象

  // input输入 / 传空清除输入
  if (action.type === 'USER_SET_INPUTCHANGE') {
    return {
      ...state,
      inputVal: action.value
    };
  }

  // 将input值push到列表中 
  if (types.USER_SET_LISTPUSH === action.type) {
    let newState = JSON.parse(JSON.stringify(state));
    if(newState.inputVal && newState.inputVal !== '请输入') {
      newState.statelList.push(newState.inputVal);
      newState.inputVal = '请输入';
    }
    return newState;
  }

  // 删除列表
  if (types.USER_DELETE_ITEM === action.type) {
    console.log('简写1');
    let newState = JSON.parse(JSON.stringify(state));
    newState.statelList.splice(action.index,1);
    return newState;
  }
  if (action.type === 'USER_DELETE_ITEM1') {
    console.log('原生写法');
    let newState = JSON.parse(JSON.stringify(state));
    newState.statelList.splice(action.index,1);
    return newState;
  }

  return state;
};