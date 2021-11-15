import * as types from '../action-type';

const initState = {
  sidebarCollapsed:false,
  code:'code值----',
  isTitle:true,
};

export function app(state = initState, action){
  // console.log(state,action);

  switch(action.type){
    case types.APP_TOGGLE_SIDEBAR :
      // console.log(state,'state');
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      };
      case types.APP_SET_CODE :
        return {
          ...state,
          code: state.code
        };
        case types.APP_SET_TITLE :
          return {
            ...state,
            isTitle: !state.isTitle
          };
      default:
        return state;
  }
}
