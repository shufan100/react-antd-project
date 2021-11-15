// import * as types from '../action-type';

const userState = {
  inputVal: '请输入',
  statelList: ['早上10点', '中午12点', '晚上9点'],
};

export function user (state = userState, action){
  // Reducer里只能接受state，不能改变state,返回新得对象

  if (action.type === 'USER_SET_INPUTCHANGE') {
    console.log(state);
    return {
      ...state,
      inputVal: action.value
    };
  }

  if (action.type === 'USER_SET_LISTPUSH') {
    let newState = JSON.parse(JSON.stringify(state));
    if(newState.inputVal) {
      newState.statelList.push(newState.inputVal);
    }
    return newState;
  }

  if (action.type === 'USER_DELETE_ITEM') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.statelList.splice(action.index,1);
    return newState;
  }

  return state;
};