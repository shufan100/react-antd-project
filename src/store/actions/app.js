import * as types from '../action-type';


//  action方法
// export const toggleSiderBar = ()=>{
//   return {
//     type: types.APP_TOGGLE_SIDEBAR
//   }
// };
  export const toggleSiderBar = ()=>({
    type: types.APP_TOGGLE_SIDEBAR
  });
  export const setCodeAction = ()=>({
    type: types.APP_SET_CODE
  });
  export const setTitleAction = (titleVal)=>({
    type: types.APP_SET_TITLE,
  });