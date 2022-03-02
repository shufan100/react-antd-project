import * as types from '../action-type';

const initState = {
  sidebarCollapsed: false,
  code: 'code值----',
  isTitle: true,
};

// action:接受两个值，一个type,一个data
// preState默认赋值初始化initState的值，可以理解为就是上面的initState的值，将action传进来的值给旧数据的值做处理
export function app (preState = initState, action) {
  // console.log(preState,action);

  switch (action.type) {
    case types.APP_TOGGLE_SIDEBAR:
      return {
        ...preState,
        sidebarCollapsed: !preState.sidebarCollapsed
      };
    case types.APP_SET_CODE:
      return {
        ...preState,
        code: preState.code
      };
    case types.APP_SET_TITLE:
      return {
        ...preState,
        isTitle: !preState.isTitle
      };
    default:
      return preState;
  }
}
